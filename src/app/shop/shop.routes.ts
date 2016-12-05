import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetails} from './shop-detail.component';
export const shopRoutes: Route[] = [
  {
    path: 'shop', children: [
    {path: '', component: ShopFrontComponent},
    {path: 'detail/:id', component: ShopItemDetails}
  ]
  },

];
