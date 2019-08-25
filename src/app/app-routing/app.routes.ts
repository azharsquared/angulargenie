import { Routes } from '@angular/router';

import { SignInComponent, SignUpComponent } from '../components/components.index';

export const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' }
];