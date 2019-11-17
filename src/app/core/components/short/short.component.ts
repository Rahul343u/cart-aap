import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../../services/application-state/application-state.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {
  orderByKey = 'price';
  orderByOrder = false;

  constructor(private appState: ApplicationStateService) {}

  ngOnInit() {
    this.orderByKey = this.appState.getOderByKeys().orderByKey;
    this.orderByOrder = this.appState.getOderByKeys().orderByOrder;
  }

  setOrderByKeys(orderBy, order) {
    this.orderByKey = orderBy;
    this.orderByOrder = order;
    this.appState.setOrderByKeys(this.orderByKey, this.orderByOrder);
  }
}
