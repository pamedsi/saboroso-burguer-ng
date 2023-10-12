import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {ClientOrder} from "../../../models/ClientOrder";
import {OrderService} from "../../../services/OrderService";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent {
  @Input() hidden!: boolean
  order!: ClientOrder
  @Output() nextStep: EventEmitter<any>
  @Output() backToMe:  EventEmitter<any>

  totalValue!: number

  constructor(private orderService: OrderService) {
    this.nextStep = new EventEmitter()
    this.backToMe = new EventEmitter()
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
    this.nextStep.emit()
    this.hidden = true
  }

  reviewOrder() {
    this.backToMe.emit()
    this.hidden = false
  }
}
