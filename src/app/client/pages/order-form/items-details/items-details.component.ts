import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientOrder} from "../../../models/ClientOrder";
import {AddOnForMenu} from "../../../factories/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../../factories/Menu/BurgerForMenu";
import {IAddOnStatus} from "../../../models/IAddOnStatus";
import {BreadDTO} from "../../../../shared/models/MenuItemDTO/BreadDTO";
import {ComboForMenu} from "../../../factories/Menu/ComboForMenu";
import {OrderService} from "../../../services/OrderService";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit{
  @Input() hidden!: boolean;
  order!: ClientOrder
  @Output() nextStep: EventEmitter<any>
  @Output() backToMe: EventEmitter<any>

  @Input() addOns!: AddOnForMenu[]
  @Input() combos!: ComboForMenu[]
  @Input() breads!: BreadDTO[]

  private finishedBurgerAddOns: IAddOnStatus
  private finishedPortionAddOns: IAddOnStatus

  constructor(private orderService: OrderService) {
    this.finishedBurgerAddOns = {allRight: true} as IAddOnStatus
    this.finishedPortionAddOns = {allRight: true} as IAddOnStatus

    this.nextStep = new EventEmitter()
    this.backToMe = new EventEmitter()
  }

  ngOnInit() {
    this.orderService.currentOrder.subscribe(order =>
      this.order = order
    )
  }

  onBurgerAddOnFinished(burgerAddOnStatus: IAddOnStatus) {
    this.finishedBurgerAddOns = burgerAddOnStatus
  }

  onPortionAddOnFinished(portionAddOnStatus: IAddOnStatus) {
    this.finishedPortionAddOns = portionAddOnStatus
  }

  onComboChange(selectedCombo: any, burger: BurgerForMenu) {
    const index = selectedCombo.target.selectedIndex - 1

    // Caso a opção "Sem Combo" seja selecionada
    if (index <= 0) burger.setCombo(null)
    // Caso contrário
    else burger.setCombo(this.combos[index])
  }
  finishItemsDetails() {
    if (!this.finishedBurgerAddOns.allRight) {
      // lançar pop-up
      console.log(this.finishedBurgerAddOns.missing)
      return
    }
    if (!this.finishedPortionAddOns.allRight) {
      // lançar pop-up
      console.log(this.finishedPortionAddOns.missing)
      return
    }
    if(this.order.burgers.some(burger=> !burger.breadEditing)) {
      // lançar pop-up
      console.info('pão pendente')
      return
    }

    this.order.burgers.forEach(burger => {
      burger.setBread(burger.breadEditing as BreadDTO)
      burger.setAddOns(burger.addOnsEditing as AddOnForMenu[])
      burger.setObs(burger.obsEditing)
      if (burger.comboEditing) burger.setCombo(burger.comboEditing)
    })
    this.order.portions.forEach(portion => {
      portion.setAddOns(portion.addOnsEditing)
      portion.setObs(portion.obsEditing)
    })

    this.orderService.changeOrder(this.order)
    this.nextStep.emit()
    this.hidden = true
  }

  updateItemsDetails(){
    this.backToMe.emit()
    this.hidden = false
  }

  compareBreads(b1: BreadDTO, b2: BreadDTO) {
    return b1 && b2 ? b1.identifier === b2.identifier : b1 === b2;
  }

  compareCombos(combo1: ComboForMenu, combo2: ComboForMenu) {
    console.log(combo2)
    console.log(Boolean(combo2))
    return combo1 && combo2 ? combo1.getIdentifier() === combo2.getIdentifier() : combo1 === combo2;
  }
}
