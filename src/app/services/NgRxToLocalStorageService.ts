import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserState } from '../reducers/users.reducers';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private subscription: Subscription;

  constructor(private store: Store<UserState>) {
    this.subscription = this.store.subscribe((state) => {
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('users', JSON.stringify(state.users));
    });

    // Listen for the beforeunload event and save NgRx state before the page is refreshed
    window.addEventListener('beforeunload', () => {
      alert('yfyfyfy');
      this.saveStateToLocalStorage();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public saveStateToLocalStorage(): void {
    this.store.subscribe((state) => {
      alert('ass');
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('users', JSON.stringify(state.users));
    });
  }
}
