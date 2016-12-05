import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';
  private shoppingCart: IShopItem[] = [];

  constructor(private http: Http) {
  }


  getItems(): Promise<IShopItem[]> {
    return this.http.get(ShopService.baseUrl)
      .map(res => res.json())
      .toPromise();
  }

  get(id: number) {
    return this.http.get(ShopService.baseUrl + '/' + id)
      .map(res => res.json())
      .toPromise();
  }

  addTOCart(item: IShopItem) {
    this.shoppingCart = [...this.shoppingCart, item];
  }

  addItemToShop(item) {
    return this.http.post(ShopService.baseUrl, item).toPromise();
  }

  editShopItem(id, data) {
    return this.http.put(ShopService.baseUrl + '/' + id, data).toPromise();
  }

  removeItemFromShop(id) {
    return this.http.delete(ShopService.baseUrl + '/' + id).toPromise();
  }

  removeFromCart(index: number) {
    this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];
  }

  getCart() {
    return this.shoppingCart;
  }
}
