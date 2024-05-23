import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, generateClient, post } from 'aws-amplify/api';
import { Store, select } from '@ngrx/store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import * as subscriptions from '../../graphql/subscriptions';
import * as queries from '../../graphql/queries';
import { User, User as UserType } from '../types/users';
import { selectUser } from '../selectors/users.selectors';
import { NotificationType, Post } from 'src/API';
import { PostsComponent } from '../posts/posts.component';
import * as mutations from '../../graphql/mutations';
import { UsersActions } from '../actions/users.actions';
import { PostsActions } from '../actions/posts.actions';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    NgIf,
    MatProgressSpinnerModule,
    MatButtonModule,
    PostsComponent,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent implements OnInit {
  filter: string | null = '';
  searchTerm: string | null = '';
  userFromState: UserType | null = null;
  allUsers: UserType[] | null = null;
  filteredUsers: UserType[] | null = null;
  filteredPosts: Post[] | null = null;
  allPosts: Post[] | null = null;
  public client: Client;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.client = generateClient({ authMode: 'apiKey' });
  }
  async ngOnInit(): Promise<void> {
    this.store.pipe(select(selectUser)).subscribe(async (user) => {
      if (user) {
        this.userFromState = user;
        this.filterUsers();
      }
      const postsResponse = await this.client.graphql({
        query: queries.listPosts,
      });

      this.client
        .graphql({
          query: subscriptions.onSendLike,
        })
        .subscribe({
          next: async ({ data }) => {
            const postsResponse = await this.client.graphql({
              query: queries.listPosts,
            });
            this.allPosts = postsResponse.data.listPosts.items as Post[];
            this.filterPosts();
          },
          error: (error) => console.error('error', error),
        });

      this.client
        .graphql({
          query: subscriptions.onRemoveLike,
        })
        .subscribe({
          next: async ({ data }) => {
            const postsResponse = await this.client.graphql({
              query: queries.listPosts,
            });
            this.allPosts = postsResponse.data.listPosts.items as Post[];
            this.filterPosts();
          },
          error: (error) => console.error('error', error),
        });

      this.allPosts = postsResponse.data.listPosts.items as Post[];
      this.filterPosts();
    });

    const response = await this.client.graphql({ query: queries.listUsers });
    this.allUsers = response.data.listUsers?.items as unknown as UserType[];
    // Access dynamic parameter and query parameter
    this.route.params.subscribe((params) => {
      this.filter = params['filter'];
      this.filterUsers();
      this.filterPosts();
    });

    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
      this.filterPosts();
      this.filterUsers();
    });
  }

  filterUsers = () => {
    if (this.allUsers && this.searchTerm !== null && this.userFromState) {
      this.filteredUsers = this.allUsers.filter(
        (user) =>
          user.firstName
            .toLowerCase()
            .trim()
            .includes(this.searchTerm ?? '') &&
          user.id !== this.userFromState?.id
      );
    }
  };
  filterPosts = () => {
    if (this.allPosts && this.searchTerm !== null && this.userFromState) {
      this.filteredPosts = this.allPosts.filter(
        (post) =>
          post.author.firstName
            .toLowerCase()
            .trim()
            .includes(this.searchTerm ?? '') ||
          post.author.lastName
            .toLowerCase()
            .trim()
            .includes(this.searchTerm ?? '') ||
          post.content
            .toLowerCase()
            .trim()
            .includes(this.searchTerm ?? '')
      );
    }
  };

  sendFriendRequest = async (
    recipientId: string,
    sender: User | null,
    recipient: User,
    senderId?: string
  ) => {
    try {
      const response = await this.client.graphql({
        query: mutations.sendFriendRequest,
        variables: {
          removeOrSend: 'Send',
          senderId: senderId ?? '',
          recipientId,
        },
      });
      await this.client.graphql({
        query: mutations.createNotification,
        variables: {
          input: {
            message: 'sent you a friend request',
            senderId: senderId ?? '',
            recipientId,
            type: NotificationType.FRIEND_REQUEST,
            senderName: `${sender?.firstName} ${sender?.lastName}`,
          },
        },
      });
      this.store.dispatch(
        UsersActions.addUser({
          user: response?.data.sendFriendRequest as unknown as UserType,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  cancelFriendRequest = async (
    recipientId: string,
    sender: User | null,
    recipient: User,
    senderId?: string
  ) => {
    try {
      const senderFriendRequest = sender?.friendRequests.filter(
        (request) => request !== recipientId
      );
      const recipientFriendRequest = recipient?.friendRequests.filter(
        (request) => request !== senderId
      );
      const response = await this.client.graphql({
        query: mutations.sendFriendRequest,
        variables: {
          senderFriendRequest: senderFriendRequest ?? [],
          recipientFriendRequest,
          removeOrSend: 'Remove',
          senderId: senderId ?? '',
          recipientId,
        },
      });

      this.store.dispatch(
        UsersActions.addUser({
          user: response?.data.sendFriendRequest as unknown as UserType,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
}
