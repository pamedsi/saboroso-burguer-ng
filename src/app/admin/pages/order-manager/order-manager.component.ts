import {Component} from '@angular/core';
import {OrderManagerService} from "../../services/OrderManagerService";
import {WebSocketService} from "../../services/WebSocketService";
import {OrderResponseDTO} from "../../models/orderDTO/OrderResponseDTO";
import {WIthPriceFormatter} from "../../../shared/utils/PriceFormatter";
import {CurrencyPipe} from "@angular/common";
import {IPaymentMethod} from "../../../shared/models/IPaymentMethod";
import {IOrderStatus} from "../../../shared/models/IOrderStatus";

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent extends WIthPriceFormatter{
  orders:  OrderResponseDTO[]
  protected readonly IPaymentMethod = IPaymentMethod;

  constructor(private orderManagerService: OrderManagerService, private webSocketService: WebSocketService, currencyPipe: CurrencyPipe,) {
    super(currencyPipe);
    this.orders = []
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

  getPaymentMethod(paymentMethod: IPaymentMethod){
    switch (paymentMethod) {
      case IPaymentMethod.CASH:
        return 'Dinheiro'

      case IPaymentMethod.DEBIT_CARD:
        return 'Cartão de Débito'

      case IPaymentMethod.CREDIT_CARD:
        return 'Cartão de crédito'

      case IPaymentMethod.PIX:
        return 'Pix'
    }

    return ''
  }

  getStatusLabel(status: IOrderStatus){
    return this.statusOptions.find(element => element.value === status)?.label
  }

  updateStatus(order: OrderResponseDTO) {
    this.orderManagerService.updateOrderStatus(order.identifier, order.status).subscribe(console.info)
    console.log(this.orders)
  }


  protected readonly statusOptions = [
    {
      label: 'Na fila',
      value: IOrderStatus.IN_QUEUE
    },
    {
      label: 'Em preparo',
      value: IOrderStatus.PREPARING
    },
    {
      label: 'Pronto',
      value: IOrderStatus.READY
    },
    {
      label: 'Saiu para a entrega',
      value: IOrderStatus.OUT_TO_DELIVERY
    },
    {
      label: 'Entregue',
      value: IOrderStatus.DELIVERED
    },
    {
      label: 'Cancelado',
      value: IOrderStatus.CANCELED
    }
  ]

}
