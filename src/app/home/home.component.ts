import { Component, OnInit } from '@angular/core';
import { generateClient, type Client } from 'aws-amplify/api';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import * as Auth from 'aws-amplify/auth';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Post, User } from 'src/API';
import { User as UserType } from '../types/users';
import { StoreService } from '../services/StoreService';
import { PostsComponent } from '../posts/posts.component';
import { CreatePostsComponent } from '../create-posts/create-posts.component';
import {
  selectFriendsPost,
  selectUserPosts,
} from '../selectors/posts.selectors';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    MatIcon,
    CommonModule,
    PostsComponent,
    CreatePostsComponent,
  ],
})
export class HomeComponent implements OnInit {
  public userData$!: Observable<UserType | null>;
  public usersPosts$!: Observable<Post[]>;
  public friendsPost$!: Observable<Post[]>;
  public client: Client;
  public displayPosts: Post[] = [];
  public router: Router;
  constructor(
    private fb: FormBuilder,
    router: Router,
    private storeService: StoreService,
    private store: Store
  ) {
    this.router = router;

    this.client = generateClient({ authMode: 'apiKey' });
  }

  async ngOnInit() {
    this.userData$ = this.storeService.getUserData();
    this.usersPosts$ = this.store.pipe(select(selectUserPosts));

    this.friendsPost$ = this.store.pipe(select(selectFriendsPost));
    try {
    } catch (e) {
      console.error('error fetching posts', e);
    }
  }

  combinePosts(usersPosts: Post[] | null, friendsPosts: Post[] | null): Post[] {
    // Combine the usersPosts and friendsPosts arrays into a single array
    if (usersPosts && friendsPosts) return [...usersPosts, ...friendsPosts];
    else return [];
  }

  onCreatePost = async () => {
    try {
      const user = await Auth.getCurrentUser();
      if (user) {
        // Get the userId from the selected user
        const userId = user.userId;
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error creating post2', error);
    }
  };

  imageLogo = 'assets/logo.png';
}
