import {IShopItems} from './shop.types';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';

  constructor(private http: Http) {
  }

  getItems(): Promise<IShopItems[]> {
    return this.http.get(ShopService.baseUrl)
      .map(res => res.json())
      .toPromise();
  }
}
