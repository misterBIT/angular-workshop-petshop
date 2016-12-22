import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetails} from './shop-detail.component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {AuthGuard} from '../userAuth/auth.guard';
import {ShopItemResolver} from './shop-item.resolver';
import {ShopItemBasic} from './shop-item-details-basic.component';
import {ShopItemExtra} from './shop-item-details-extra.component';
export const shopRoutes: Route[] = [
    {
      path: 'shop', children: [
      {path: '', component: ShopFrontComponent},
      {
        path: 'detail/:id', component: ShopItemDetails,
        resolve: {shopItem: ShopItemResolver}, children: [
        {path: '', component: ShopItemBasic},
        {path: 'extra', component: ShopItemExtra}
      ]
      },
      {
        path: 'admin', canActivate: [AuthGuard], children: [
        {path: 'edit/:id', component: ShopAdminItemEditComponent, resolve: {shopItem: ShopItemResolver}},
        {path: 'add', component: ShopAdminItemEditComponent}
      ]
      }

    ]
    },

  ]
  ;
