import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';
  private shoppingCart: IShopItem[] = [];
  private items: IShopItem[] = [];

  constructor(private http: Http) {
    this.getItems()
  }


  getItems(): Promise<IShopItem[]> {
    return this.http.get(ShopService.baseUrl)
      .map(res => res.json())
      .do(items => this.items = items)
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

  addItemToShop(item): Promise<Response> {
    return this.http.post(ShopService.baseUrl, item).toPromise();
  }

  editShopItem(id, data): Promise<Response> {
    return this.http.put(ShopService.baseUrl + '/' + id, data).toPromise();
  }

  removeItemFromShop(id): Promise<Response> {
    return this.http.delete(ShopService.baseUrl + '/' + id).toPromise();
  }

  removeFromCart(index: number) {
    this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];
  }

  getCart() {
    return this.shoppingCart;
  }

  getNextId(_id) {
    let index = this.items.findIndex((i) => _id === i._id);
    return (index === this.items.length - 1) ? this.items[0]._id : this.items[index + 1]._id;
  }
}
