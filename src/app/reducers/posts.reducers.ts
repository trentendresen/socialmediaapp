import { createReducer, on } from '@ngrx/store';
import { orderBy } from 'lodash';

import { Post } from 'src/API';
import { PostsActions } from '../actions/posts.actions';

export interface PostsState {
  userPosts: Post[] | null;
  friendsPosts: Post[] | null;
}

export const initialState: PostsState = {
  userPosts: null,
  friendsPosts: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.addUserPosts, (state, { userPosts }) => ({
    ...state,
    userPosts: orderBy(userPosts, 'createdAt', 'desc'), // Ensure userPosts is sorted
  })),
  on(PostsActions.appendUserPosts, (state, { userPost }) => ({
    ...state,
    userPosts: state.userPosts ? [userPost, ...state.userPosts] : [userPost], // Handle null case
  })),
  on(PostsActions.appendFriendsPost, (state, { friendsPost }) => ({
    ...state,
    friendsPosts: state.friendsPosts
      ? [friendsPost, ...state.friendsPosts]
      : [friendsPost], // Handle null case
  })),
  on(PostsActions.addFriendsPost, (state, { friendsPost }) => ({
    ...state,
    friendsPosts: orderBy(friendsPost, 'createdAt', 'desc'), // Ensure friendsPosts is sorted
  })),
  on(PostsActions.removeUserPost, (state, { userPost }) => ({
    ...state,
    userPosts: state.userPosts
      ? state.userPosts.filter((post) => post.id !== userPost.id)
      : null, // Handle null case
  })),
  on(PostsActions.removeFriendsPost, (state, { friendPost }) => ({
    ...state,
    friendsPosts: state.friendsPosts
      ? state.friendsPosts.filter((post) => post.id !== friendPost.id)
      : null, // Handle null case
  }))
);
