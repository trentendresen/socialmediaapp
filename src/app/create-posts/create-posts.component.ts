import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Client, generateClient } from 'aws-amplify/api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { User as UserType } from '../types/users';
import * as mutations from '../../graphql/mutations';

@Component({
  selector: 'app-create-posts',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './create-posts.component.html',
  styleUrl: './create-posts.component.css',
})
export class CreatePostsComponent {
  @Input() userData!: UserType | null;
  public postsForm: FormGroup;
  public postsContent: string = '';
  private client: Client;
  public submitted: boolean = false;

  constructor(postsForm: FormBuilder) {
    this.client = generateClient({ authMode: 'apiKey' });
    this.postsForm = postsForm.group({
      content: ['', Validators.required],
    });
  }

  onCreatePost = async (content: string) => {
    if (!content.length) {
      alert('Can not post a blank post');
      return;
    }
    try {
      this.postsForm.reset();
      await this.client.graphql({
        query: mutations.createPost,
        variables: {
          input: {
            content: content,
            userId: this.userData?.id ?? '',
          },
        },
      });
    } catch (error) {
      console.error('Error creating post', error);
    }
  };
}
