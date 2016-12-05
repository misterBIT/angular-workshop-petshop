import {Route} from '@angular/router';
import {PetListComponent} from './pet/pet-list.component';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: 'pets', component: PetListComponent},
];
