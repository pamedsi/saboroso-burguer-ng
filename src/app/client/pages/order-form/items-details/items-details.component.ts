import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ClientOrderDTO} from "../../../models/ClientOrderDTO";
import {AddOnForMenu} from "../../../factories/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../../factories/Menu/BurgerForMenu";
import {IAddOnStatus} from "../../../models/IAddOnStatus";
import {BreadDTO} from "../../../../shared/models/MenuItemDTO/BreadDTO";
import {ComboForMenu} from "../../../factories/Menu/ComboForMenu";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent {
  @Input() orderItems!: ClientOrderDTO

  @Input() addOns!: AddOnForMenu[]
  @Input() combos!: ComboForMenu[]
  @Input() breads!: BreadDTO[]

  @Output() nextStep: EventEmitter<any>

  hidden: boolean

  private finishedBurgerAddOns: IAddOnStatus
  private finishedPortionAddOns: IAddOnStatus

  constructor() {
    this.finishedBurgerAddOns = {allRight: true} as IAddOnStatus
    this.finishedPortionAddOns = {allRight: true} as IAddOnStatus
    this.nextStep = new EventEmitter()
    this.hidden = false
  }

  onBreadChange(selectedBread: any, burger: BurgerForMenu) {
    const index = selectedBread.target.selectedIndex - 1
    if (index <= -1) return

    const chosenBread = this.breads[index]
    burger.setBread(chosenBread)
  }
  onBurgerAddOnFinished(burgerAddOnStatus: IAddOnStatus) {
    // console.log(burgerAddOnStatus)
    this.finishedBurgerAddOns = burgerAddOnStatus
  }
  onPortionAddOnFinished(portionAddOnStatus: IAddOnStatus) {
    this.finishedPortionAddOns = portionAddOnStatus
  }
  onComboChange(selectedCombo: any, burger: BurgerForMenu) {
    const index = selectedCombo.target.selectedIndex - 1
    if (index <= -1) return
    const chosenCombo = this.combos[index]
    burger.setCombo(chosenCombo)
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
    this.nextStep.emit(this.orderItems)
    this.hidden = true
  }
  updateItemsDetails(){
    this.hidden = false
  }
}
