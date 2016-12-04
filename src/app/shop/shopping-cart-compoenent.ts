import {Component, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IShopItem} from './shop.types';
import {MdRipple} from '@angular/material';

@Component({
  selector: 'shopping-cart',
  styles: [`md-list[dense] /deep/ .md-list-item {padding-left:0;height:25px;}`],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<md-card md-ripple>
  <md-card-header>
    <md-icon md-card-avatar>shopping basket</md-icon>
    <md-card-title>Shopping Cart
  </md-card-title>
  </md-card-header>
  <md-card-content>
    <md-list dense>
      <md-list-item *ngFor="let item of shoppingCart;let i = index">
        <button md-icon-button color="warn" (click)="removeFromCart.emit(i)">
          <md-icon>clear</md-icon>
        </button>
        {{item.title}} 
      </md-list-item>
    </md-list>
    <md-card-footer>Total Sum:{{sum}}</md-card-footer>
  </md-card-content>
</md-card>`
})
export class ShoppingCartCompoennt implements OnChanges {
  @Input() shoppingCart: IShopItem[] = [];
  @Output() removeFromCart = new EventEmitter<number>();

  @ViewChild(MdRipple) ripple;

  get sum() {
    // console.log('sum called');
    return this.shoppingCart.reduce((acc, item) => acc += (+item.price), 0)
  }

  ngOnChanges(changes) {
    if (changes.shoppingCart) {
      this.ripple.start();
      setTimeout(() => {
        this.ripple.end()
      }, 200);
    }
  }
}
