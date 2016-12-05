import {Component} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list-item-renderer',
  template: `<ng-content></ng-content>
             <a [routerLink]="['detail',item._id]" >{{item.title}}></a> - <span>{{item.price|currency:'USD':true}}</span>`
})
export class ShopListItemRendererComponent {
  @Input() item: IShopItem;
}
