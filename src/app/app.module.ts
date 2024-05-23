import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { userReducer } from './reducers/users.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocalStorageService } from './services/NgRxToLocalStorageService';
import { NgRxInitService } from './services/LocalStorageToNgRxStateService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { postsReducer } from './reducers/posts.reducers';
import { FormsModule } from '@angular/forms';
import { notificationsReducer } from './reducers/notifications.reducers';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoginComponent,
    HomeComponent,
    MatFormFieldModule,
    MatButton,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpClientModule,
    MatBadgeModule,
    MatMenuModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      user: userReducer,
      posts: postsReducer,
      notifications: notificationsReducer,
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    LocalStorageService,
    NgRxInitService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private localStorageService: LocalStorageService,
    private ngRxInitService: NgRxInitService
  ) {}
}
