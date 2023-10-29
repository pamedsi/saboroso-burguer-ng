import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environment/environment";
import {defaultWithToken} from "../utils/Headers";
import {WebSocketService} from "./WebSocketService";
import {OrderResponseDTO} from "../models/orderDTO/OrderResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class OrderManagerService {

  constructor(private http: HttpClient, private webSocketService: WebSocketService) {}

  getAllOrders(){
    return this.http.get<OrderResponseDTO[]>(`${environment.API_URL}/order-manager`, {headers: defaultWithToken})
  }

}
