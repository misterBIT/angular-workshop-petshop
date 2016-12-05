import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetails} from './shop-detail.component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
export const shopRoutes: Route[] = [
  {
    path: 'shop', children: [
    {path: '', component: ShopFrontComponent},
    {path: 'detail/:id', component: ShopItemDetails},
    {
      path: 'admin', children: [
      {path: 'edit/:id', component: ShopAdminItemEditComponent},
      {path: 'add', component: ShopAdminItemEditComponent}
    ]
    }

  ]
  },

];
