import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-front',
  styles: [`
            .shop-container{display:flex;align-content: space-between}
            shop-list {flex:1;} 
            shopping-cart {flex: 0 0  200px;} 
`],
  template: `
<md-card>
  <md-card-header>
    <md-card-title><h1>Shop</h1></md-card-title>
  </md-card-header>
  <md-card-content class="shop-container">
    <shop-list [items]="items" (purchase)="shopService.addTOCart($event)"></shop-list>
    <shopping-cart [shoppingCart]="shopService.getCart()" (removeFromCart)="shopService.removeFromCart($event)"></shopping-cart>
  </md-card-content>
</md-card>`

})
export class ShopFrontComponent implements OnInit {

  private items: IShopItem[];


  constructor(private shopService: ShopService) {

  }

  ngOnInit() {
    this.shopService.getItems().then((items) => {
      this.items = items;
    });
  }

}
