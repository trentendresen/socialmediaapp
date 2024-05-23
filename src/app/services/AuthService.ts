import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth from '@aws-amplify/auth';
import { Store } from '@ngrx/store';
import { signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { BehaviorSubject, Observable } from 'rxjs';

import { UsersActions } from '../actions/users.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private store: Store) {
    this.setupAuthListener();
  }

  // Setup authentication state listener
  private setupAuthListener(): void {
    Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          this.isAuthenticatedSubject.next(true);
          break;
        case 'signedOut':
          this.isAuthenticatedSubject.next(false);
          break;
      }
    });
  }

  // Check if the user is authenticated
  async isAuthenticated(): Promise<boolean> {
    try {
      const user = await auth.getCurrentUser();
      return !!user; // Return true if user exists (authenticated), otherwise false
    } catch (error) {
      console.error('Error checking authentication status:', error);
      return false;
    }
  }

  // Observable to observe authentication state changes
  get authState(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getCurrentUser = async () => {
    try {
      return auth.getCurrentUser();
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  };

  logout = async () => {
    try {
      await signOut().then(() => {
        this.store.dispatch(UsersActions.removeUser());
        this.router.navigate(['/']);
      });
    } catch (error) {
      console.error('error signing out: ', error);
    }
  };
}
