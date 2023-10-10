import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientOrder} from "../../models/ClientOrder";
import {ComboForMenu} from "../../factories/Menu/ComboForMenu";
import {MenuService} from "../../services/MenuService";
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";
import {IOrderState} from "../../models/IOrderState";
import {OrderService} from "../../services/OrderService";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights: boolean
  state: IOrderState
  order!: ClientOrder

  protected readonly IOrderState = IOrderState;

  breads!: BreadDTO[]
  combos!: ComboForMenu[]
  addOns!: AddOnForMenu[]

  constructor(private router: Router, private menuService: MenuService, private orderService: OrderService) {
    this.onHighlights = false
    this.state = IOrderState.CHOOSING_ITEMS
  }

  ngOnInit(){
    this.menuService.getCombosForMenu().subscribe(combos=>
      this.combos = combos
    )
    this.menuService.getAddOnsForMenu().subscribe(addOns =>
      this.addOns = addOns
    )
    this.menuService.getBreadsForMenu().subscribe(breads =>
      this.breads = breads
    )
  }
  onChangeOption($event: Event){
    this.onHighlights = String($event) === 'highlights'
  }
  redirectToHome() {
    this.router.navigate!(['/'])
  }

  // Para estado
  goToChoosingItems(){
    this.state = IOrderState.CHOOSING_ITEMS
  }
  goToItemDetails(){
    this.orderService.currentOrder.subscribe(order => {
      this.order = order
    })

    this.state = IOrderState.ITEMS_DETAILS
  }
  goToOrderReview() {
    this.orderService.currentOrder.subscribe(order => {
      this.order = order
    })
    this.state = IOrderState.ORDER_REVIEW
  }
  goToContactInfo() {
    this.state = IOrderState.CONTACT_AND_ADDRESS
  }
}
