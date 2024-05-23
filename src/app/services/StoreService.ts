import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectUser } from '../selectors/users.selectors';
import { User } from '../types/users';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store<AppState>) {}

  getUserData(): Observable<User | null> {
    return this.store.pipe(select(selectUser));
  }

  // Add more methods for accessing other data as needed
}
