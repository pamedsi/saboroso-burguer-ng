import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ClientOrder} from "../models/ClientOrder";
import {IPaymentMethod} from "../models/IPaymentMethod";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSource = new BehaviorSubject<ClientOrder>({
    burgers: [],
    portions: [],
    drinks: [],
    paymentMethod: IPaymentMethod.PENDING_TO_CHOOSE
  });

  currentOrder = this.orderSource.asObservable();

  changeOrder(order: ClientOrder) {
    this.orderSource.next(order);
  }
}
