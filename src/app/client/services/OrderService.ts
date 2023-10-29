import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ClientOrder} from "../models/ClientOrder";
import {IPaymentMethod} from "../../shared/models/IPaymentMethod";
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
    orderCode: '',
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
    console.log(JSON.stringify(orderDTO))
   return this.http.post(`${environment.API_URL}/make-order`, orderDTO, {headers: defaultHeaders})
  }

  generateOrderCode(): string{
    const [quantityOfCharacters, base] = [4, 36]

    const limit = parseInt("z".repeat(quantityOfCharacters), base)
    const codeInDecimal = Math.round(Math.random() * limit)
    let codeIn36Base = codeInDecimal.toString(base).toUpperCase()
    if (codeIn36Base.length < quantityOfCharacters)  codeIn36Base = codeIn36Base.padStart(quantityOfCharacters, "0")

    return codeIn36Base
  }
}
