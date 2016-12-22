import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IShopItem} from './shop.types';

@Component({
  selector: `shop-item-details-basic.component`,
  template: `{{item.title}}`
})
export class ShopItemBasic {
  private item: IShopItem;
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.item =  this.route.parent.snapshot.data['shopItem'];
  }

}
