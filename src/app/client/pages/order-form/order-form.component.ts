import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientOrderDTO} from "../../models/ClientOrderDTO";
import {ComboForMenu} from "../../factories/Menu/ComboForMenu";
import {MenuService} from "../../services/MenuService";
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";
import {IOrderState} from "../../models/IOrderState";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights: boolean
  state: IOrderState
  order!: ClientOrderDTO

  protected readonly IOrderState = IOrderState;

  breads!: BreadDTO[]
  combos!: ComboForMenu[]
  addOns!: AddOnForMenu[]

  constructor(private router: Router, private menuService: MenuService) {
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
  goToItemDetails(order: ClientOrderDTO){
    this.order = order
    this.state = IOrderState.ITEMS_DETAILS
  }
  goToOrderReview() {
    // CHECAR SE TÁ TUDO CERTO COM OS DETALHES DO PEDIDO
    this.state = IOrderState.ORDER_REVIEW
  }
  goToContactInfo() {
    this.state = IOrderState.CONTACT_AND_ADDRESS
  }

}
