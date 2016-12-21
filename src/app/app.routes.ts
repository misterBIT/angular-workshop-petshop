import {Route, Routes} from '@angular/router';
import {PetListComponent} from './pet/pet-list.component';
import {LoginComponent} from './userAuth/login.component';
import {UserRegistrationComponent} from './userAuth/registeration.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: 'shop', loadChildren: "./shop/shop.module#ShopModule"},
  {path: 'pets', component: PetListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: '**', redirectTo: '/pets'}
];
