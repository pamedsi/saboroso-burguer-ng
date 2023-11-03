import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../utils/Headers";
import {WebSocketService} from "./WebSocketService";
import {OrderResponseDTO} from "../../shared/models/OrderResponseDTO";
import {IOrderStatus} from "../../shared/models/IOrderStatus";

@Injectable({
  providedIn: 'root'
})
export class OrderManagerService {

  constructor(private http: HttpClient, private webSocketService: WebSocketService) {}

  getAllOrders(){
    return this.http.get<OrderResponseDTO[]>(`${environment.API_URL}/order-manager`, {headers: defaultWithToken})
  }

  getUnfinishedOrders(){
    return this.http.get<OrderResponseDTO[]>(`${environment.API_URL}/unfinished-orders`, {headers: defaultWithToken})
  }

  updateOrderStatus(orderIdentifier: string, status: IOrderStatus) {
    return this.http.put(`${environment.API_URL}/update-order-status`, {orderIdentifier, status}, {headers: withTokenAndBody})
  }

}
