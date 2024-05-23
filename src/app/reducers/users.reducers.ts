import { createReducer, on } from '@ngrx/store';
import { UsersActions } from '../actions/users.actions';
import { User } from '../types/users';

export interface UserState {
  user: User | null;
  users: User[] | null;
}

export const initialState: UserState = {
  user: null,
  users: null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.addUser, (state, { user }) => ({
    ...state,
    user, // Assign the user object to the user state property
  })),
  on(UsersActions.removeUser, (state) => ({ ...state, user: null })),
  on(UsersActions.addAllUsers, (state, { users }) => ({
    ...state,
    users, // Assign the user object to the user state property
  }))
);
