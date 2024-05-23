import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './services/AuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private redirectFlag: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  async canActivate(): Promise<boolean> {
    // Check if the user is authenticated

    if (await this.authService.isAuthenticated()) {
      if (!this.location.path() && !this.redirectFlag) {
        this.redirectFlag = true;
        this.router.navigate(['/home']);
        return false;
      }
      return true; // Allow access to other routes if logged in
    } else {
      alert('You do not have permission to view this page');
      this.router.navigate(['']);
      return false;
    }
  }
}
