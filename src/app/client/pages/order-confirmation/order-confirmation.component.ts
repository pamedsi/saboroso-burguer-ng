import { Component } from '@angular/core';
import {OrderService} from "../../services/OrderService";
import {ClientOrder} from "../../models/ClientOrder";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  order!: ClientOrder

  constructor(private orderService: OrderService) {}

  ngOnInit(){
    this.orderService.currentOrder.subscribe(order => this.order = order)
  }

  goToHomePage(){
    window.location.href = ''
  }

  goToOrderStatus() {
    window.location.href = '/order-status'
  }

  goToOrderForm() {
    window.location.href = '/order-form'
  }
}
