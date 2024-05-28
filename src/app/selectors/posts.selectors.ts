import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '../reducers/posts.reducers';
import { Post } from 'src/API';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectUserPosts = createSelector(
  selectPostsState,
  (state: PostsState) => state.userPosts
);

export const selectFriendsPost = createSelector(
  selectPostsState,
  (state: PostsState) => state.friendsPosts
);
