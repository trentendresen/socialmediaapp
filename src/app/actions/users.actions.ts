import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../types/users';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add User': props<{ user: User | null }>(),
    'Remove User': emptyProps(), // Action without props
    'Add All Users': props<{ users: User[] | null }>(),
  },
});
