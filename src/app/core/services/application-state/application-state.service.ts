import { Injectable } from '@angular/core';
import { Item } from '../../models/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {
  addTocartPageData: Array<Item> = [];
  cartPageData: Array<Item> = [];

  orderByKeys = { orderByKey: 'price', orderByOrder: false };

  $cartPageDataSub = new Subject<Array<Item>>();
  $orderBySub = new Subject<{ orderByKey: string; orderByOrder: boolean }>();

  constructor() {}

  getAddTocartPageData() {
    return [...this.addTocartPageData];
  }

  setAddTocartPageData(addTocartPageData) {
    this.addTocartPageData = [...addTocartPageData];
  }

  getCartPageData() {
    return [...this.cartPageData];
  }

  setCartPageData(data: Array<Item>) {
    this.cartPageData = [...data];
    this.$cartPageDataSub.next(this.cartPageData);
  }

  getOderByKeys() {
    return this.orderByKeys;
  }

  setOrderByKeys(key, order) {
    this.orderByKeys.orderByKey = key;
    this.orderByKeys.orderByOrder = order;

    this.$orderBySub.next(this.orderByKeys);
  }
}
