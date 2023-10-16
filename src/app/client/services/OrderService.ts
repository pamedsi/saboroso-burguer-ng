import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ClientOrder} from "../models/ClientOrder";
import {IPaymentMethod} from "../models/IPaymentMethod";
import {HttpClient} from "@angular/common/http";
import {OrderDTO} from "../models/OrderDTO";
import {environment} from "../../../environment/environment";
import {defaultHeaders} from "../../admin/utils/Headers";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSource = new BehaviorSubject<ClientOrder>({
    clientName: '',
    clientPhoneNumber: '',
    addressToDeliver: '',
    burgers: [],
    portions: [],
    drinks: [],
    paymentMethod: IPaymentMethod.PENDING_TO_CHOOSE,
    totalToPay: 0
  });

  currentOrder = this.orderSource.asObservable();

  constructor(private http: HttpClient) {}

  changeOrder(order: ClientOrder) {
    this.orderSource.next(order);
  }

  makeOrder(orderDTO: OrderDTO){
    this.http.post(`${environment}/make-order`, orderDTO, {headers: defaultHeaders})
      .subscribe(console.info)
  }
}
