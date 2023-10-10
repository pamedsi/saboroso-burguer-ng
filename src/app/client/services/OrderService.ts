import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ClientOrder} from "../models/ClientOrder";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSource = new BehaviorSubject<ClientOrder>({
    burgers: [],
    portions: [],
    drinks: []
  });

  currentOrder = this.orderSource.asObservable();

  changeOrder(order: ClientOrder) {
    this.orderSource.next(order);
  }
}
