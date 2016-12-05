import {Route} from '@angular/router';
import {PetListComponent} from './pet/pet-list.component';
import {LoginComponent} from './userAuth/login.component';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: 'pets', component: PetListComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/shop'}
];
