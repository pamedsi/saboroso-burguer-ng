import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddOnForMenu} from "../../../../factories/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../../../factories/Menu/BurgerForMenu";
import {PortionForMenu} from "../../../../factories/Menu/PortionForMenu";
import {IAddOnStatus} from "../../../../models/IAddOnStatus";

@Component({
  selector: 'app-on-add-on-choose',
  templateUrl: './on-add-on-choose.component.html',
  styleUrls: ['./on-add-on-choose.component.css']
})
export class OnAddOnChooseComponent {
  @Input() item!: BurgerForMenu | PortionForMenu
  @Input() itemIndex!: number
  @Input() allAddOns!: AddOnForMenu[]
  @Output() addOnsStatus: EventEmitter<IAddOnStatus>
  rangeToChooseAddOns: (number | string)[]

  constructor() {
    this.rangeToChooseAddOns = Array.from({length: 10}, (_, i) => i + 1)
    this.rangeToChooseAddOns.unshift('')
    this.addOnsStatus = new EventEmitter()

  }

  chooseNumberOfAddOns() {
    let chosenLength = Number(this.item.numberOfAddOns)
    if(isNaN(chosenLength)) chosenLength = 0

    if (this.item.addOnsEditing.length > chosenLength) {
      this.item.addOnsEditing = this.item.addOnsEditing.slice(0, chosenLength)
    }
    else {
      this.item.addOnsEditing.push(...new Array(chosenLength - this.item.addOnsEditing.length).fill(''))
    }

    this.addOnsStatus.emit(this.getAddOnStatus())
  }

  onAddOnChange() {
    this.addOnsStatus.emit(this.getAddOnStatus())
  }

  getAddOnStatus(): IAddOnStatus{
    let [missingChoose, index] = [false, 0]

    for (index = 0; index < Number(this.item.numberOfAddOns); index++){
      if(!this.item.addOnsEditing[index]) {
        missingChoose = true
        break
      }
    }

    if (missingChoose) {
      const allRight = false
      const missing = `${index + 1}º adicional do ${this.itemIndex + 1}º item pendente!`

      if (this.item instanceof PortionForMenu) {
        return {allRight, missing: missing.replace('item', 'porção')} as IAddOnStatus
      }
      return {allRight, missing: missing.replace('item', 'hambúrguer')} as IAddOnStatus
    }

    return {allRight: true} as IAddOnStatus
  }

  compareAddOns(addOn1: AddOnForMenu, addOn2: AddOnForMenu){
    return addOn1 && addOn2 ? addOn1.getIdentifier() === addOn2.getIdentifier() : addOn1 === addOn2
  }
}
