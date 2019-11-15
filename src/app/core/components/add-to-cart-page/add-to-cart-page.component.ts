import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../models/item.model';
import { ApplicationStateService } from '../../services/application-state/application-state.service';
import { ApiCallService } from '../../services/api-call/api-call.service';

@Component({
  selector: 'app-add-to-cart-page',
  templateUrl: './add-to-cart-page.component.html',
  styleUrls: ['./add-to-cart-page.component.scss']
})
export class AddToCartPageComponent implements OnInit, OnDestroy {
  addTocartPageData: Array<Item>;
  cartPageData: Array<Item> = [];
  currentItem: string = '';
  timeoutSubscription: any;
  totalItems: number;
  constructor(
    private appState: ApplicationStateService,
    private apiCall: ApiCallService
  ) {}

  ngOnInit() {
    this.addTocartPageData = this.appState.getAddTocartPageData();
    this.cartPageData = this.appState.getCartPageData();
    console.log(this.addTocartPageData);
    if (this.addTocartPageData.length === 0) {
      this.apiCall.getAllItems().subscribe((data: Array<Item>) => {
        this.addTocartPageData = data;
        this.appState.setAddTocartPageData(data);
      });
    }
  }

  addToCart(data) {
    this.cartPageData.push(data);
    this.appState.setCartPageData(this.cartPageData);
  }

  ngOnDestroy() {
    this.appState.setCartPageData(this.cartPageData);
  }
}
