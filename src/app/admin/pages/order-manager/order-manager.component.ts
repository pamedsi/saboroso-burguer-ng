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


    // this.webSocketService.connectEvent.subscribe(() => {
    //     console.log('Conectado com sucesso!');
    //     this.webSocketService.client.subscribe("/topic/greetings", (message) => {
    //         console.log(message);
    //         this.messages.push(message); // Adiciona a nova mensagem ao array
    //   })
    // })

    this.refreshOrderList()
  }

  refreshOrderList(){
    this.orderManagerService.getAllOrders().subscribe(orders =>
      this.orders = orders
    )
  }

  mandarSalve(){
    this.webSocketService.sendMessage("um salve do front!")
  }
}
