import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from './shop.service';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-detail',
  template: `
<md-card>
<md-card-header>
<md-card-title>{{item?.title}}</md-card-title>
<img md-card-avatar src="http://loremflickr.com/100/100/{{item?.title}}"/>
</md-card-header>
<md-card-content>
 <img md-card-lg-image src="http://loremflickr.com/320/240/{{item?.title}}">
<h3>{{item?.price|currency:'USD':true}}</h3>
</md-card-content>
<md-card-actions>
<button md-raised-button (click)="buyItem()">Buy</button>
</md-card-actions>
</md-card>`
})
export class ShopItemDetails implements OnInit {
  item: IShopItem;

  constructor(private activeRoute: ActivatedRoute, private shopService: ShopService, private router: Router) {
  }

  ngOnInit() {
    this.shopService.get(this.activeRoute.snapshot.params['id']).then(item => {
      this.item = item;
    })
  }

  buyItem() {
    this.shopService.addTOCart(this.item);
    this.router.navigate(['/shop']);
  }

}
