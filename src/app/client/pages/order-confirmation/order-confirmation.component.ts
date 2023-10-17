import { Component } from '@angular/core';
import {OrderService} from "../../services/OrderService";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {

  constructor(private orderService: OrderService) {

  }
}
