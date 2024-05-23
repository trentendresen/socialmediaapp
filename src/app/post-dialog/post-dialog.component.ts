import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Client, generateClient } from 'aws-amplify/api';

import * as mutations from '../../graphql/mutations';
import { User as UserType } from '../types/users';
import { formatCreatedAtDate } from '../helpers/dateHelpers';
import { Post } from 'src/API';
import { NgFor } from '@angular/common';
import { PostsActions } from '../actions/posts.actions';

export type PostDialogDataType = {
  post: Post;
  user: UserType;
};

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    NgFor,
  ],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css',
})
export class PostDialogComponent {
  private client: Client;
  public commentForm: FormGroup;
  formatCreatedAtDate = formatCreatedAtDate;
  @Output() commentAdded = new EventEmitter<any>(); // Event emitter to emit updated post data

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<PostDialogComponent>,
    commentForm: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: PostDialogDataType,
    private cdr: ChangeDetectorRef
  ) {
    this.commentForm = commentForm.group({
      content: ['', Validators.required],
    });
    this.client = generateClient({ authMode: 'apiKey' });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleLike(post: Post): void {
    if (this.isLiked(post)) {
      this.client.graphql({
        query: mutations.removeLike,
        variables: {
          postId: post.id,
          senderId: this.data.user.id,
          recipientId: post.author.id,
        },
      });
    } else {
      this.client.graphql({
        query: mutations.sendLike,
        variables: {
          postId: post.id,
          senderId: this.data.user.id,
          recipientId: post.author.id,
        },
      });
    }
  }

  onCreateComment = (comment: string) => {
    if (!comment.length) {
      alert('Can not post a blank comment');
      return;
    } else {
      this.commentForm.reset();
      this.client
        .graphql({
          query: mutations.createComment,
          variables: {
            input: {
              content: comment,
              postId: this.data.post.id,
              userId: this.data.user.id,
            },
          },
        })
        .then((data) => {
          this.store.dispatch(
            PostsActions.addUserPosts({
              userPosts: data.data.createComment as unknown as Post[],
            })
          );
          this.commentAdded.emit(data.data.createComment);
          this.cdr.detectChanges();
        })
        .catch((e) => console.error(e));
      // this.closeDialog();
    }
  };

  closeDialog = () => {
    this.dialogRef.close();
  };

  isLiked(post: Post): boolean {
    if (post.likes.length) {
      const user = post.likes.find((user) => user === this.data.user.id);
      return user ? true : false;
    } else {
      return false;
    }
  }
}
