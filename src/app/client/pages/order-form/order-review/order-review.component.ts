import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ClientOrderDTO} from "../../../models/ClientOrderDTO";

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent {
  @Input() hidden!: boolean
  @Input() order!: ClientOrderDTO
  @Output() nextStep: EventEmitter<any>
  @Output() backToMe:  EventEmitter<any>

  constructor() {
    this.nextStep = new EventEmitter()
    this.backToMe = new EventEmitter()
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
