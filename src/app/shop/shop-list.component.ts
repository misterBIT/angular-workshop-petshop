import {Component, Output, EventEmitter} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list',
  template: `<ul>
                <li *ngFor="let item of items">
                   {{item.title}} - <span>{{item.price|currency}}</span>
                   <button (click)="buyItem(item)">BUY</button>
                 </li> 
             </ul>`
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  buyItem(item) {
    this.purchase.emit(item);

  }
}
