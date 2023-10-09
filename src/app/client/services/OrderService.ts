import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ClientOrderDTO} from "../models/ClientOrderDTO";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSource = new BehaviorSubject<ClientOrderDTO>({
    burgers: [],
    portions: [],
    drinks: []
  });

  currentOrder = this.orderSource.asObservable();

  changeOrder(order: ClientOrderDTO) {
    this.orderSource.next(order);
  }
}
