import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetails} from './shop-detail.component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {AuthGuard} from '../userAuth/auth.guard';
export const shopRoutes: Route[] = [
  {
    path: '', children: [
    {path: '', component: ShopFrontComponent},
    {path: 'detail/:id', component: ShopItemDetails},
    {
      path: 'admin', canActivate: [AuthGuard], children: [
      {path: 'edit/:id', component: ShopAdminItemEditComponent},
      {path: 'add', component: ShopAdminItemEditComponent}
    ]
    }

  ]
  },

];
