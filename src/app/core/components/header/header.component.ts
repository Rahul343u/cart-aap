import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state/application-state.service';
import { Item } from '../../models/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartPageData: Array<Item> = [];
  susbcription: Subscription;
  totalItems: number;
  constructor(
    private router: Router,
    private apptateService: ApplicationStateService
  ) {}

  ngOnInit() {
    this.susbcription = this.apptateService.$cartPageDataSub.subscribe(data => {
      this.cartPageData = data;
    });
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  getTotalItems() {
    this.totalItems = 0;
    this.cartPageData.forEach((data, index) => {
      this.totalItems = this.totalItems + (data.count ? data.count : 1);
    });
    return this.totalItems;
  }

  ngOnDestroy() {
    this.susbcription.unsubscribe();
  }
}
