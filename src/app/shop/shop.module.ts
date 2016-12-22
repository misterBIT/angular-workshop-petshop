import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
import {ShopListComponent} from './shop-list.component';
import {ShopListItemRendererComponent} from './shop-item-renderer.compoent';
import {ShopItemDetails} from './shop-detail.component';
import {RouterModule} from '@angular/router';
import {shopRoutes} from './shop.routes';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ShopItemResolver} from './shop-item.resolver';
import {ShopItemExtra} from './shop-item-details-extra.component';
import {ShopItemBasic} from './shop-item-details-basic.component';
@NgModule({
  providers: [ShopService, ShopItemResolver],
  declarations: [ShopFrontComponent, ShopItemBasic, ShopItemExtra, ShoppingCartCompoennt, ShopListComponent, ShopListItemRendererComponent, ShopItemDetails, ShopAdminItemEditComponent],
  imports: [SharedModule, RouterModule.forChild(shopRoutes), ReactiveFormsModule],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
