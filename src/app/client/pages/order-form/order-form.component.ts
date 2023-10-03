import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientOrderDTO} from "../../models/ClientOrderDTO";
import {ComboForMenu} from "../../factories/Menu/ComboForMenu";
import {MenuService} from "../../services/MenuService";
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";
import {BurgerForMenu} from "../../factories/Menu/BurgerForMenu";
import {IMissingAddon} from "../../models/IMissingAddOn";
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

  private finishedBurgerAddOns: IMissingAddon
  private finishedPortionAddOns: IMissingAddon
  protected readonly IOrderState = IOrderState;

  breads!: BreadDTO[]
  combos!: ComboForMenu[]
  addOns!: AddOnForMenu[]

  constructor(private router: Router, private menuService: MenuService) {
    this.onHighlights = false
    this.state = IOrderState.CHOOSING_ITEMS

    this.finishedBurgerAddOns = {allRight: true} as IMissingAddon
    this.finishedPortionAddOns = {allRight: true} as IMissingAddon
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
  goToDetails(order?: ClientOrderDTO) {
    if (order) this.order = order
    this.state = IOrderState.ITEM_DETAILS
  }
  updateChosenItems(){
    this.state = IOrderState.CHOOSING_ITEMS
  }

  // Burger details
  onBreadChange(selectedBread: any, burger: BurgerForMenu) {
    const index = selectedBread.target.selectedIndex - 1
    if (index <= -1) return

    const chosenBread = this.breads[index]
    burger.setBread(chosenBread)

    if(this.state === IOrderState.ORDER_REVIEW) {}
  }

  onComboChange(selectedCombo: any, burger: BurgerForMenu) {
    const index = selectedCombo.target.selectedIndex - 1
    if (index <= -1) return
    const chosenCombo = this.combos[index]
    burger.setCombo(chosenCombo)
  }
  onBurgerAddOnFinished(burgerAddOnStatus: IMissingAddon) {
    this.finishedBurgerAddOns = burgerAddOnStatus
  }

  // Add-on for portions
  onPortionAddOnFinished(portionAddOnStatus: IMissingAddon) {
    this.finishedPortionAddOns = portionAddOnStatus
  }

  // Order review
  goToOrderReview() {
    this.state = IOrderState.ORDER_REVIEW
  }

  goToContactAndAddress() {
    this.state = IOrderState.CONTACT_INFO
  }
}
