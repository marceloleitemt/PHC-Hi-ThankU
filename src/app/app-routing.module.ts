import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdaptComponent } from './thanks/adapt/adapt.component';
import { CoolComponent } from './thanks/cool/cool.component';
import { ImpactComponent } from './thanks/impact/impact.component';
import { AddEditComponent } from './thanks/add-edit/add-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { authGuard, publicGuard } from './guard/auth.guard';


// routes
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [publicGuard],
  },
  {
    path: 'logout',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [publicGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [publicGuard],
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
  {
    path: 'adapt',
    component: AdaptComponent
  },
  {
    path: 'cool',
    component: CoolComponent
  },
  {
    path: 'impact',
    component: ImpactComponent
  },
  {
    path: 'add',
    component: AddEditComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
