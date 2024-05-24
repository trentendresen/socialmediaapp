import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CommonModule, NgIf } from '@angular/common';
import { Client, generateClient } from 'aws-amplify/api';

import { User as UserType } from '../types/users';
import { PostsComponent } from '../posts/posts.component';
import * as queries from '../../graphql/queries';
import { Post } from 'src/API';
import { StoreService } from '../services/StoreService';
import { selectUserPosts } from '../selectors/posts.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PostsComponent, NgIf, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  public userData$!: Observable<UserType | null>;
  public usersPosts: Post[] | null = null;
  public profileId: string | null = null;
  public client: Client;
  constructor(
    private storeService: StoreService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.client = generateClient({ authMode: 'apiKey' });
  }

  async ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.profileId = params.get('id');
    });
    this.userData$ = this.storeService.getUserData();

    const response = await this.client.graphql({
      query: queries.getPostsByUser,
      variables: {
        authorId: this.profileId ?? '',
      },
    });
    this.usersPosts = response.data.getPostsByUser as unknown as Post[];
  }
}
