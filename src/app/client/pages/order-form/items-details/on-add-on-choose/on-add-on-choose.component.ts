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
  rangeToChooseAddOns: number[]

  constructor() {
    this.rangeToChooseAddOns = Array.from({length: 10}, (_, i) => i + 1)
    this.addOnsStatus = new EventEmitter()
  }

  chooseNumberOfAddOns(clickedOption: any) {
    const length = clickedOption.selectedIndex

    if (this.item.addOnsEditing.length > length) {
      this.item.addOnsEditing = this.item.addOnsEditing.slice(0, length)
    }
    else {
      this.item.addOnsEditing.push(...new Array(length - this.item.addOnsEditing.length))
    }

    this.addOnsStatus.emit(this.getAddOnStatus())
  }

  onAddOnChange() {
    console.log(this.item.addOnsEditing)
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
}
