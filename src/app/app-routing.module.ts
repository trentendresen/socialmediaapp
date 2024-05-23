import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
  {
    path: 'search/:filter',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:userName',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
