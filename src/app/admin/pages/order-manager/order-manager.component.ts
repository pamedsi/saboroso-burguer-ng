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
  pendingOrders:  OrderResponseDTO[]
  protected readonly IPaymentMethod = IPaymentMethod;

  constructor(private orderManagerService: OrderManagerService, private webSocketService: WebSocketService, currencyPipe: CurrencyPipe,) {
    super(currencyPipe);
    this.pendingOrders = []
  }

  ngOnInit(){
    this.webSocketService.connect()
    this.refreshOrderList()

    this.webSocketService.responseSubject.subscribe(() => {
      this.alertNewOrder()
    })
  }

  refreshOrderList(){
    this.orderManagerService.getUnfinishedOrders().subscribe(orders => {
      orders.forEach(order => order.timeOfPurchase = new Date(order.timeOfPurchase))
      orders.sort((a,b) => a.timeOfPurchase.valueOf() - b.timeOfPurchase.valueOf())
      this.pendingOrders = orders
    })
  }

  alertNewOrder(){
    // Implementar algum efeito sonoro
    // Implementar algo semelhante a um pop-up
    alert("Novo pedido!")
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

  updateStatus(order: OrderResponseDTO) {
    this.orderManagerService.updateOrderStatus(order.identifier, order.status).subscribe(console.info)
  }


  finishOrder(order: OrderResponseDTO){
    if (order.status === IOrderStatus.CANCELED || order.status === IOrderStatus.DELIVERED) {
      this.pendingOrders = this.pendingOrders.filter(currentOrder => currentOrder.identifier !== order.identifier)
      return
    }

    console.error('Atualize o status para "CANCELADO" ou "ENTREGUE" antes de encerrar o pedido.')
  }

  formatHour(time: Date): string{
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes().toString()
    return `${time.getHours()}:${minutes}`
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
