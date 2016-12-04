import {IShopItems} from './shop.types';

const StoreItems = require('./shop-items.data.json');

export class ShopService {
  getItems(): Promise<IShopItems[]> {
    return Promise.resolve(StoreItems);
  }
}
