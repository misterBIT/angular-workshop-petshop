import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
import {ShopListComponent} from './shop-list.component';
import {ShopListItemRendererComponent} from './shop-item.compoent';
import {ShopItemDetails} from './shop-detail.component';
import {RouterModule} from '@angular/router';
import {shopRoutes} from './shop.routes';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  providers: [ShopService],
  declarations: [ShopFrontComponent, ShoppingCartCompoennt, ShopListComponent, ShopListItemRendererComponent, ShopItemDetails, ShopAdminItemEditComponent],
  imports: [SharedModule, RouterModule.forChild(shopRoutes), ReactiveFormsModule],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
