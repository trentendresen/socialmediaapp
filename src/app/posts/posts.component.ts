import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Client, generateClient } from 'aws-amplify/api';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { formatCreatedAtDate } from '../helpers/dateHelpers';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import { User as UserType } from '../types/users';

import { selectUserPosts } from '../selectors/posts.selectors';
import { Post } from 'src/API';
import { PostsActions } from '../actions/posts.actions';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    CommonModule,
  ],
  animations: [
    trigger('newPost', [
      state(
        'true',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      transition('void => true', [
        style({
          transform: 'scale(0.8)',
          opacity: 0.8,
        }),
        animate('400ms cubic-bezier(.35,0,.25,1)'),
      ]),
    ]),
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  @Input() userData!: UserType | null;
  @Input() combinedPosts!: Post[] | null;

  private newPosts: Post[] = [];
  formatCreatedAtDate = formatCreatedAtDate;
  private postsSubscription!: Subscription;

  private client: Client;
  private dialogRef: MatDialogRef<PostDialogComponent> | undefined;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private postDialog: MatDialog,
    private router: Router
  ) {
    this.client = generateClient({ authMode: 'apiKey' });
  }
  isNewPost(post: Post): boolean {
    if (this.newPosts.includes(post)) {
      return true;
    } else {
      return false;
    }
  }

  async ngOnInit(): Promise<void> {
    this.client.graphql({ query: subscriptions.onCreatePost }).subscribe({
      next: ({ data }) => {
        if (data.onCreatePost.authorId === this.userData?.id) {
          this.newPosts.push(data.onCreatePost as unknown as Post);
          this.store.dispatch(
            PostsActions.appendUserPosts({
              userPost: data.onCreatePost as unknown as Post,
            })
          );
        } else if (
          this.userData?.friends.includes(data.onCreatePost.authorId)
        ) {
          this.newPosts.push(data.onCreatePost as unknown as Post);
          this.store.dispatch(
            PostsActions.appendFriendsPost({
              friendsPost: data.onCreatePost as unknown as Post,
            })
          );
        }
      },
      error: (error) => console.error(error),
    });

    this.client
      .graphql({
        query: subscriptions.onSendLike,
      })
      .subscribe({
        next: ({ data }) => {
          this.store.dispatch(
            PostsActions.addUserPosts({
              userPosts: data.onSendLike as unknown as Post[],
            })
          );
        },
        error: (error) => console.error('error', error),
      });

    this.client
      .graphql({
        query: subscriptions.onRemoveLike,
      })
      .subscribe({
        next: ({ data }) => {
          this.store.dispatch(
            PostsActions.addUserPosts({
              userPosts: data.onRemoveLike as unknown as Post[],
            })
          );
        },
        error: (error) => console.error('error', error),
      });

    this.store.pipe(select(selectUserPosts)).subscribe((posts) => {
      if (posts.length && this.dialogRef && this.dialogRef.componentInstance) {
        const updatedPost = posts.find(
          (post) => this.dialogRef?.componentInstance.data.post.id === post.id
        );

        if (this.userData) {
          this.dialogRef.componentInstance.data = {
            post: updatedPost ? updatedPost : ({} as Post),
            user: this.userData,
          };
        }
      }
    });
  }

  navigateToProfile = (userName: string) => {
    this.router.navigate([`/profile/${userName}`]);
  };

  sortedCombinedPosts(): Post[] {
    if (this.combinedPosts)
      return this.combinedPosts.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    else return [];
  }

  openDialog = (postId: string) => {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '50%',

      data: { user: this.userData, postId },
    });
  };

  openPostDialog = (post: Post) => {
    this.dialogRef = this.postDialog.open(PostDialogComponent, {
      width: '50%',
      height: '90%',
      data: { post, user: this.userData },
    });
  };

  isLiked(post: Post): boolean {
    if (post.likes.length) {
      const user = post.likes.find((user) => user === this.userData?.id);
      return user ? true : false;
    } else {
      return false;
    }
  }

  toggleLike(post: Post): void {
    let postsFromState: Post[] = [];
    this.store.pipe(select(selectUserPosts)).subscribe((post) => {
      postsFromState = post;
    });
    const onePost = postsFromState.find(
      (postState) => postState.id === post.id
    );
    const likes = onePost?.likes.filter((like) => like !== this.userData?.id);

    if (this.isLiked(post)) {
      this.client.graphql({
        query: mutations.removeLike,
        variables: {
          likes: likes,
          postId: post.id,
          senderId: this.userData?.id ?? '',
          recipientId: post.author.id,
        },
      });
    } else {
      this.client.graphql({
        query: mutations.sendLike,
        variables: {
          postId: post.id,
          senderId: this.userData?.id ?? '',
          recipientId: post.author.id,
        },
      });
    }
  }
}
