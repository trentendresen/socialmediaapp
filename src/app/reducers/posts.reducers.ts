import { createReducer, on } from '@ngrx/store';
import { orderBy } from 'lodash';

import { Post } from 'src/API';
import { PostsActions } from '../actions/posts.actions';

export interface PostsState {
  userPosts: Post[];
  friendsPost: Post[];
}

export const initialState: PostsState = {
  userPosts: [],
  friendsPost: [],
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.addUserPosts, (state, { userPosts }) => ({
    ...state,
    userPosts: orderBy(userPosts, 'createdAt', 'desc'), // Assign the user object to the user state property
  })),
  on(PostsActions.appendUserPosts, (state, { userPost }) => ({
    ...state,
    userPosts: [userPost, ...state.userPosts], // If state.userPosts is null or undefined, initialize a new array with userPost
  })),
  on(PostsActions.appendFriendsPost, (state, { friendsPost }) => ({
    ...state,
    userPosts: [friendsPost, ...state.friendsPost], // If state.userPosts is null or undefined, initialize a new array with userPost
  })),
  on(PostsActions.addFriendsPost, (state, { friendsPost }) => ({
    ...state,
    friendsPost: [...friendsPost, ...state.friendsPost],
  })),
  on(PostsActions.removeUserPost, (state, { userPost }) => ({
    ...state,
    userPosts: state.userPosts.filter((post) => post.id !== userPost.id),
  })),
  on(PostsActions.removeFriendsPost, (state, { friendPost }) => ({
    ...state,
    friendsPost: state.friendsPost.filter((post) => post.id !== friendPost.id),
  }))
);
