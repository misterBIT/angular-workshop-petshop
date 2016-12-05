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
<img md-card-avatar [src]="getRandomImage()"/>
</md-card-header>
<md-card-content>
 <img md-card-lg-image [src]="getRandomImage()">
<h3>{{item?.price|currency:'USD':true}}</h3>
</md-card-content>
<md-card-actions>
<button md-raised-button (click)="buyItem()">Buy</button>
<button md-raised-button (click)="nextItem()">Next Item</button>
</md-card-actions>
</md-card>`
})
export class ShopItemDetails implements OnInit {
  item: IShopItem;

  constructor(private activeRoute: ActivatedRoute, private shopService: ShopService, private router: Router) {
  }

  getRandomImage() {
    let title = 'animals';
    if (this.item) {
      title = this.item.title.split(' ')[0].toLowerCase();
    }
    return `http://loremflickr.com/100/100/${title}`
  }

  ngOnInit() {
    this.activeRoute.params
      .map((params) => params['id'])
      .subscribe((id) => {
        this.shopService.get(id).then(item => {
          this.item = item;
        })
      });
  }

  buyItem() {
    this.shopService.addTOCart(this.item);
    this.router.navigate(['/shop']);
  }

  nextItem() {
    this.router.navigate(['/shop', 'detail', this.shopService.getNextId(this.item._id)])
  }

}
