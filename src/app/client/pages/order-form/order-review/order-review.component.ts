import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

import {ClientOrder} from "../../../models/ClientOrder";
import {OrderService} from "../../../services/OrderService";
import {WIthPriceFormatter} from "../../../../shared/utils/PriceFormatter";
import {IPaymentMethod} from "../../../models/IPaymentMethod";


@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent extends WIthPriceFormatter{
  @Input() hidden!: boolean
  order!: ClientOrder
  @Output() nextStep: EventEmitter<any>
  @Output() backToMe:  EventEmitter<any>
  paymentMethod: IPaymentMethod
  protected readonly PaymentMethod = IPaymentMethod;
  hybridPayment!: string

  totalValue!: number

  constructor(currencyPipe: CurrencyPipe, private orderService: OrderService) {
    super(currencyPipe);
    this.nextStep = new EventEmitter()
    this.backToMe = new EventEmitter()
    this.paymentMethod = IPaymentMethod.PENDING_TO_CHOOSE
  }

  ngOnInit(){
    this.orderService.currentOrder.subscribe(order => {
        this.order = order
        let [totalBurgers, totalPortions, totalDrinks] = [0,0,0]

        order.burgers.forEach(burger => {
          totalBurgers += burger.getPurchasePrice().totalValue
        })
        order.portions.forEach(portion => {
            totalPortions += portion.getPurchasePrice().totalValue
        })
        order.drinks.forEach(drink => {
            totalPortions += drink.getPrice()
        })

        this.totalValue = totalBurgers + totalDrinks + totalPortions
    })
  }

  goToNextStep(){
    this.order.paymentMethod = this.paymentMethod
    if (this.order.paymentMethod === IPaymentMethod.HYBRID) {
      this.order.howClientWillPay = this.hybridPayment
    }

    this.orderService.changeOrder(this.order)
    this.nextStep.emit()
    this.hidden = true
  }

  reviewOrder() {
    this.backToMe.emit()
    this.hidden = false
  }
}
