import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';
import {IShopItems} from './shop.types';

@Component({
  selector: 'shop-front',
  template: `<h3>Shop</h3>
<ul>
<li *ngFor="let item of items">{{item.title}} - <span>{{item.price|currency}}</span></li>
</ul>`
})
export class ShopFrontComponent{
  private items: IShopItems[];


  constructor(private storeSvc: ShopService) {
    this.storeSvc.getItems().then((items) => {
      this.items = items;
    });
  }

}
