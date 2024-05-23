import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../types/users';
import { Post } from 'src/API';
import { UserState } from '../reducers/users.reducers';

// Select the user feature state slice
export const selectUserState = createFeatureSelector<UserState>('user');

export interface AppState {
  user: User | null;
  users: User[] | null;
  userPosts: Post[] | null | undefined;
  friendsPost: Post[] | null | undefined;
}
// Select the user object from the user state
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
