import {Component, Output, EventEmitter} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list',
  template: `<md-list>
                <md-list-item *ngFor="let item of items">
                  <shop-list-item-renderer [item]="item">
                    <button md-icon-button (click)="buyItem(item)"><md-icon>add</md-icon></button>
                  </shop-list-item-renderer>
                 </md-list-item> 
             </md-list>`
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  buyItem(item) {
    this.purchase.emit(item);

  }
}
