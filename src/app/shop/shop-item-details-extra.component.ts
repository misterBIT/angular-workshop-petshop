import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IShopItem} from './shop.types';

@Component({
  selector: `shop-item-details-basic.component`,
  template: `<span>{{item.title}}</span>
 <img md-card-lg-image [src]="getRandomImage()">
<h3>{{item?.price|currency:'USD':true}}</h3>`
})
export class ShopItemExtra {
  private item: IShopItem;

  constructor(private route: ActivatedRoute) {

  }

  getRandomImage() {
    let title = 'animals';
    if (this.item) {
      title = this.item.title.split(' ')[0].toLowerCase();
    }
    return `http://loremflickr.com/100/100/${title}`
  }

  ngOnInit() {
    this.item = this.route.parent.snapshot.data['shopItem']
  }

}
