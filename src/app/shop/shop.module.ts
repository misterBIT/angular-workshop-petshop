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
@NgModule({
  providers: [ShopService],
  declarations: [ShopFrontComponent, ShoppingCartCompoennt, ShopListComponent, ShopListItemRendererComponent, ShopItemDetails],
  imports: [SharedModule, RouterModule.forChild(shopRoutes)],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
