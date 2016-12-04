import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
import {ShopListComponent} from './shop-list.component';
import {ShopListItemRendererComponent} from './shop-item.compoent';
@NgModule({
  providers: [ShopService],
  declarations: [ShopFrontComponent, ShoppingCartCompoennt, ShopListComponent, ShopListItemRendererComponent],
  imports: [SharedModule],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
