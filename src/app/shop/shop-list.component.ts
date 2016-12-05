import {Component, Output, EventEmitter} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IShopItem} from './shop.types';
import {AuthService} from '../userAuth/auth.service';
import {Router} from '@angular/router';
import {ShopService} from './shop.service';
export enum ActionTypes { add, edit, delete}
@Component({
  selector: 'shop-list',
  styles: [`
    .addItemBtn{vertical-align: middle;}`],
  template: `
<h3 *ngIf="authService.isLoggedIn">Admin View</h3>
<md-list>
                <md-list-item *ngFor="let item of items">
                  <shop-list-item-renderer [item]="item">
                    <button md-icon-button (click)="buyItem(item)"><md-icon>add</md-icon></button>
                    <button *ngIf="authService.isLoggedIn" md-icon-button (click)="adminAction(item,ActionTypes.edit)"><md-icon>edit</md-icon></button>
                    <button *ngIf="authService.isLoggedIn" md-icon-button (click)="adminAction(item,ActionTypes.delete)"><md-icon>clear</md-icon></button>
                  </shop-list-item-renderer>
                 </md-list-item> 
             </md-list>
<button class="addItemBtn" md-raised-button (click)="adminAction(null,ActionTypes.add)" color="primary" *ngIf="authService.isLoggedIn"><md-icon>add</md-icon>Add Item to shop</button> `
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  ActionTypes = ActionTypes;


  constructor(private authService: AuthService, private router: Router, private shopService: ShopService) {
  }

  adminAction(item: IShopItem, action: ActionTypes) {
    if (action === ActionTypes.edit) {
      this.router.navigate(['shop', 'admin', 'edit', item._id]);
    }
    else if (action === ActionTypes.delete) {
      this.shopService.removeItemFromShop(item._id);
    }
    else if (action === ActionTypes.add) {
      this.router.navigate(['shop', 'admin', 'add']);
    }
  }

  buyItem(item) {
    this.purchase.emit(item);

  }
}
