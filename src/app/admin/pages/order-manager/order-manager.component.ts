import { Component } from '@angular/core';
import {OrderManagerService} from "../../services/OrderManagerService";
import {WebSocketService} from "../../services/WebSocketService";

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent {
  orders: any = []
  messages: any = []

  constructor(private orderManagerService: OrderManagerService, private webSocketService: WebSocketService) {

  }

  ngOnInit(){
    this.webSocketService.connect()
    this.refreshOrderList()

    this.webSocketService.responseSubject.subscribe(() => {
      this.alertNewOrder()
    })
  }

  refreshOrderList(){
    this.orderManagerService.getAllOrders().subscribe(orders =>
      this.orders = orders
    )
  }

  alertNewOrder(){
    // Implementar algum efeito sonoro
    // Implementar algo semelhante a um pop-up
    alert("Novo pedido ae na base")
    this.refreshOrderList()
  }

}
