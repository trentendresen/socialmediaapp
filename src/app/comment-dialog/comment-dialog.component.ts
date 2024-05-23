import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { User as UserType } from '../types/users';
import * as mutations from '../../graphql/mutations';
import { Client, generateClient } from 'aws-amplify/api';
import { Post } from 'src/API';
import { PostsActions } from '../actions/posts.actions';
import { Store } from '@ngrx/store';

export type DialogDataType = {
  user: UserType;
  postId: string;
};

@Component({
  selector: 'app-comment-dialog',
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
  ],
  templateUrl: './comment-dialog.component.html',
  styleUrl: './comment-dialog.component.css',
})
export class CommentDialogComponent {
  public commentForm: FormGroup;
  private client: Client;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    commentForm: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataType
  ) {
    this.client = generateClient({ authMode: 'apiKey' });
    this.commentForm = commentForm.group({
      content: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreateComment = (comment: string) => {
    if (!comment.length) {
      alert('Can not post a blank comment');
      return;
    } else {
      this.client
        .graphql({
          query: mutations.createComment,
          variables: {
            input: {
              content: comment,
              postId: this.data.postId,
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
        })
        .catch((e) => console.error(e));
      this.closeDialog();
    }
  };

  closeDialog = () => {
    this.dialogRef.close();
  };
}
