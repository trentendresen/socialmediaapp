import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  input,
} from '@angular/core';
import * as Auth from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Client, generateClient } from 'aws-amplify/api';

import { getHowLongAgoTime } from './helpers/dateHelpers';
import * as mutations from '../graphql/mutations';
import { User as UserType } from './types/users';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import { UsersActions } from './actions/users.actions';
import { AuthService } from './services/AuthService';
import { selectUser, selectUsers } from './selectors/users.selectors';
import { PostsActions } from './actions/posts.actions';
import { Post, Notification } from 'src/API';
import { NotificationActions } from './actions/notifications.actions';
import { selectUserNotifications } from './selectors/notifications.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SocialMediaApp';
  imageLogo = 'assets/logo.png';
  public getHowLongAgoTime = getHowLongAgoTime;
  public inputValue = '';
  public searchBarVisible: boolean = false;
  currentAuthUser: Auth.AuthUser | null = null; // Define currentUser as any type or use a specific interface
  private userSubscription!: Subscription;
  private usersSubscription!: Subscription;
  public notificationMenu: Boolean = false;
  public userFromState: UserType | null = null; // User object
  public usersFromState: UserType[] | null = null; // User object
  public notificationsFromState: Notification[] | null = null; // User object
  public allOrUnread: 'all' | 'unread' = 'all';
  public router: Router;
  public client: Client;
  public authService: AuthService;
  signUpInput: Auth.SignUpInput | null = null;
  constructor(
    router: Router,
    private store: Store,
    authService: AuthService,
    private cdRef: ChangeDetectorRef
  ) {
    this.client = generateClient({ authMode: 'apiKey' });
    this.router = router;
    this.authService = authService;
  }

  async ngOnInit() {
    const response = await this.client.graphql({ query: queries.listUsers });
    const allUsers = response.data.listUsers?.items as unknown as UserType[];
    this.store.dispatch(UsersActions.addAllUsers({ users: allUsers }));

    this.getCurrentUserData();

    this.usersSubscription = this.store
      .pipe(select(selectUser))
      .subscribe(async (user) => {
        if (user) {
          this.userFromState = user;
          const notificationsResponse = await this.client.graphql({
            query: queries.getNotificationsByUser,
            variables: { id: this.userFromState?.id ?? '' },
          });
          this.store.dispatch(
            NotificationActions.addUserNotifications({
              userNotifications: notificationsResponse.data
                .getNotificationsByUser as unknown as Notification[],
            })
          );

          const response = await this.client.graphql({
            query: queries.getPostsByUser,
            variables: {
              authorId: user.id,
            },
          });

          this.store.dispatch(
            PostsActions.addUserPosts({
              userPosts: response.data.getPostsByUser as unknown as Post[],
            })
          );

          this.userFromState.friends.forEach(async (friend) => {
            const response = await this.client.graphql({
              query: queries.getPostsByUser,
              variables: {
                authorId: friend,
              },
            });

            this.store.dispatch(
              PostsActions.addFriendsPost({
                friendsPost: response.data.getPostsByUser as unknown as Post[],
              })
            );
          });
        }
      });
    this.userSubscription = this.store
      .pipe(select(selectUsers))
      .subscribe(async (user) => {
        if (user) {
          this.usersFromState = user;
        }
      });

    this.client
      .graphql({ query: subscriptions.onCreateNotification })
      .subscribe({
        next: ({ data }) => {
          if (
            data.onCreateNotification.recipientId === this.userFromState?.id
          ) {
            this.store.dispatch(
              NotificationActions.appendUserNotifications({
                userNotification:
                  data.onCreateNotification as unknown as Notification,
              })
            );
          }
        },
      });

    this.store
      .pipe(select(selectUserNotifications))
      .subscribe(async (notifications) => {
        if (notifications) {
          this.notificationsFromState = notifications;

          this.cdRef.detectChanges();
        }
      });

    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (
        payload.event === 'signedIn' ||
        payload.event === 'signedOut' ||
        payload.event === 'signInWithRedirect'
      ) {
        this.getCurrentUserData();
      }
    });
  }

  toggleSearchBar = () => {
    this.searchBarVisible = !this.searchBarVisible;
  };

  deleteNotification = async (notification: Notification) => {
    try {
      await this.client.graphql({
        query: mutations.deleteNotification,
        variables: {
          input: {
            id: notification.id,
          },
        },
      });
      this.store.dispatch(
        NotificationActions.removerUserNotifications({
          userNotificationId: notification.id,
        })
      );
      const senderFriendRequest = this.userFromState?.friends.filter(
        (request) => request !== notification.recipientId
      );

      const recipient = await this.client.graphql({
        query: queries.getUser,
        variables: {
          id: notification.recipientId,
        },
      });

      const recipientFriendRequest = recipient.data.getUser?.friends.filter(
        (request) => request !== notification.senderId
      );
      if (notification.type === 'FRIEND_REQUEST') {
        await this.client.graphql({
          query: mutations.sendFriendRequest,
          variables: {
            senderId: notification.senderId,
            recipientId: notification.recipientId,
            removeOrSend: 'Remove',
            senderFriendRequest,
            recipientFriendRequest,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  addFriend = async (notification: Notification) => {
    try {
      await this.deleteNotification(notification);
      await this.client.graphql({
        query: mutations.addFriend,
        variables: {
          senderId: notification.senderId,
          recipientId: notification.recipientId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    const isNotificationButton = target.id === 'notificationButton';

    // Toggle notification menu if the clicked element is the notification button
    if (isNotificationButton) {
      this.notificationMenu = !this.notificationMenu;
      return;
    }

    // Check if the clicked element is within the notification menu
    if (
      !target.closest('.notificationMenuContainer') &&
      this.notificationMenu
    ) {
      // If clicked outside of the notification menu, close it
      this.notificationMenu = false;
    }
  }
  openNotificationMenu = () => {
    this.notificationMenu = true;
  };

  getUserPhotos = (userId: string) => {
    return this.usersFromState?.find((user) => user.id === userId)?.photoUrl;
  };

  flipAllOrUnread() {
    this.allOrUnread = this.allOrUnread === 'all' ? 'unread' : 'all';
  }

  searchResultsForAll = (event: MouseEvent) => {
    event.preventDefault();

    this.router.navigate(['/search', 'top'], {
      queryParams: { q: this.inputValue.toLowerCase().trim() },
    });
  };

  goHome = () => {
    this.router.navigate(['']);
  };

  getCurrentUserData = async () => {
    try {
      this.currentAuthUser = await Auth.getCurrentUser();
      if (this.currentAuthUser) {
        try {
          const userResponse = await this.client
            .graphql({
              query: queries.getUser,
              variables: { id: this.currentAuthUser.userId },
            })
            .catch((e) => {
              console.error(e);
              return null;
            });

          this.store.dispatch(
            UsersActions.addUser({
              user: userResponse?.data.getUser as unknown as UserType,
            })
          );
        } catch (error) {}
      }
    } catch (err) {
      console.error('authenticate Error', err);
      this.currentAuthUser = null;
    }
  };
}
