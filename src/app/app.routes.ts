import {Route} from '@angular/router';
import {PetListComponent} from './pet/pet-list.component';
import {ShopFrontComponent} from './shop/shop-front.component';
export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: 'pets', component: PetListComponent},
  {path: 'shop', component: ShopFrontComponent}
];
