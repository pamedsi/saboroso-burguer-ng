import { Component } from '@angular/core';
import {OrderService} from "../../services/OrderService";
import {OrderResponseDTO} from "../../../shared/models/OrderResponseDTO";
import {removeSpecialChars} from "../../utils/removeSpecialChars";
import {IOrderStatus} from "../../../shared/models/IOrderStatus";
import {statusOptions} from "../../../shared/models/statusOptions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {
  orders: OrderResponseDTO[] = []
  order!: OrderResponseDTO
  finder!: string

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(){
    sessionStorage.clear()
  }

  getOrder(){
    const finder = removeSpecialChars(this.finder)
    if (!finder) {
      console.error("Erro ao remover caracteres especiais")
      return
    }

    if (finder.length === 4) this.orderService.getOrderByCode(finder).subscribe(order => {
      this.order = order
    })

    else if (finder.length === 11) this.orderService.getOrdersByPhoneNumber(finder).subscribe(order => {
      this.orders = order
    })

    else alert("Seu número de celular ou código de pedido deve estar faltando ou sobrando algum dígito")
  }

  getStatusLabel(status: IOrderStatus) {
    return statusOptions.find(update => update.value === status)?.label
  }

  goBackToHome() {
    this.router.navigate(['/'])
  }
}
