import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as uuid from 'uuid';
import {
  signIn,
  signUp,
  type SignInInput,
  confirmSignUp,
  AuthUser,
} from 'aws-amplify/auth';
import { MatButton } from '@angular/material/button';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Store, select } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { Client, generateClient } from 'aws-amplify/api';

import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { MustMatch } from 'src/app/helpers/signUpHelpers';
import { User } from 'src/app/types/enterIntoDBTypes';
import { User as UserType } from '../types/users';
import { AppState, selectUser } from '../selectors/users.selectors';
import { AuthService } from '../services/AuthService';
import { LocalStorageService } from '../services/NgRxToLocalStorageService';
import { UsersActions } from '../actions/users.actions';
import { AwsServiceService } from '../services/awsservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    MatButton,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatLabel,
    FormsModule,
    MatButtonModule,
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginOrSignup: 'Login' | 'Sign Up' = 'Login';
  public nextStep: null | 'Next Step' = null;
  public id: string = '';
  public photoUrl: string = '';
  public username: string = '';
  public password: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public router: Router;
  public submitted: boolean = false;
  public codeForm: FormGroup;
  public signUpUserForm: FormGroup;
  public loginUserForm: FormGroup;
  public client: Client;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public user: UserType | null = null; // User object
  private userSubscription!: Subscription;
  private currentUser: AuthUser | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(
    private awsService: AwsServiceService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.client = generateClient({ authMode: 'apiKey' });
    this.codeForm = this.fb.group({
      code: ['', [Validators.required]],
    });
    this.signUpUserForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        email: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      },
      {
        validators: MustMatch('password', 'confirmPassword'),
      }
    );
    this.loginUserForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.router = router;
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    // Subscribe to the user state
    this.userSubscription = this.store
      .pipe(select(selectUser))
      .subscribe((user) => {
        this.user = user;
      });
    if (await this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  onFileSelected = async (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(selectedFile);
    }
    this.photoUrl = selectedFile;
  };

  onCreateUser = async ({ username, lastName, email, firstName, id }: User) => {
    try {
      const url = await this.awsService.putObjectIntoBucket(
        this.photoUrl,
        this.id
      );
      const response = await this.client.graphql({
        query: mutations.createUser,
        variables: {
          input: {
            photoUrl: url ? url : '',
            id: this.id ? this.id : 'id',
            username,
            firstName,
            email,
            lastName,
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  onButtonClick(loginOrSignup: 'Login' | 'Sign Up'): void {
    this.loginOrSignup = loginOrSignup;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onLoginUser = async ({ username, password }: SignInInput) => {
    this.submitted = true;
    if (this.loginUserForm.valid) {
      try {
        const { isSignedIn, nextStep } = await signIn({ username, password });
        if (nextStep.signInStep === 'DONE' && isSignedIn) {
          this.currentUser = await this.authService.getCurrentUser();
          if (this.currentUser) {
            this.router.navigate(['/main']);
            this.submitted = false;
          }
        }
      } catch (err: any) {
        console.error(err);
        alert(err.message);
      }
    } else {
      return;
    }
  };

  async handleSignUpConfirmation(code: string) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: this.username ? this.username : '',
        confirmationCode: code,
      });
      if (isSignUpComplete && nextStep.signUpStep === 'DONE') {
        await this.onCreateUser({
          id: this.id,
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: '',
        });
        await signIn({ username: this.username, password: this.password });
        this.router.navigate(['/main']);
      }
      this.submitted = false;
    } catch (error: any) {
      console.error('error confirming sign up', error);
    }
  }

  onSignUpUser = async ({
    username,
    password,
    email,
    firstName,
    lastName,
  }: User) => {
    this.submitted = true;

    if (this.signUpUserForm.valid) {
      try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
          username,
          password,
          options: {
            userAttributes: {
              email,
              name: firstName,
              given_name: lastName,
            },
          },
        });
        if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          this.id = userId ? userId : uuid.v4();
          this.username = username;
          this.email = email;
          this.firstName = firstName;
          this.lastName = lastName;
          this.password = password;
          this.nextStep = 'Next Step';
        }
        if (isSignUpComplete && nextStep.signUpStep === 'DONE') {
          await this.onCreateUser({
            id: userId,
            username,
            firstName,
            lastName,
            email,
            password,
          });
          this.router.navigate(['/main']);
        }
        this.submitted = false;
      } catch (error: any) {
        console.error(error);
        alert(error.message);
      }
    } else {
      return;
    }
  };
}
