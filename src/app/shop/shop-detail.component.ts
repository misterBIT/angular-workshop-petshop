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
<button (click)="goToExtra()">Show extra details</button>
<router-outlet></router-outlet>
</md-card-content>
<md-card-actions>
<button md-raised-button (click)="buyItem()">Buy</button>
<button md-raised-button (click)="nextItem()">Next Item</button>
</md-card-actions>
</md-card>`
})
export class ShopItemDetails implements OnInit {
  item: IShopItem;

  constructor(private router:Router,private activeRoute: ActivatedRoute, private shopService: ShopService) {
  }
goToExtra(){
    this.router.navigate(['./extra'],{relativeTo:this.activeRoute,skipLocationChange:true})
}
  getRandomImage() {
    let title = 'animals';
    if (this.item) {
      title = this.item.title.split(' ')[0].toLowerCase();
    }
    return `http://loremflickr.com/100/100/${title}`
  }

  ngOnInit() {
    this.activeRoute.data
      .map((data) => data['shopItem'])
      .subscribe((item) => {
        this.item = item;
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
