import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersActions } from '../actions/users.actions';
import { AppState } from '../selectors/users.selectors';
import { UserState } from '../reducers/users.reducers';

@Injectable({
  providedIn: 'root',
})
export class NgRxInitService implements OnInit {
  constructor(private store: Store<UserState>) {
    const savedState = localStorage.getItem('user');
    if (savedState) {
      const parsedState: AppState = JSON.parse(savedState);
      this.store.dispatch(
        UsersActions.addUser({
          user: parsedState.user,
        })
      );
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
