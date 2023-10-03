import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../factories/Menu/BurgerForMenu";
import {PortionForMenu} from "../../factories/Menu/PortionForMenu";
import {IMissingAddon} from "../../models/IMissingAddOn";

@Component({
  selector: 'app-on-add-on-choose',
  templateUrl: './on-add-on-choose.component.html',
  styleUrls: ['./on-add-on-choose.component.css']
})
export class OnAddOnChooseComponent {
  @Input() item!: BurgerForMenu | PortionForMenu
  @Input() itemIndex!: number
  @Input() addOns!: AddOnForMenu[]
  @Output() finishSelectingAddOns: EventEmitter<IMissingAddon>

  rangeToChooseAddOns!: number[]
  chosenNumberOfAddons!: number[]
  chosenAddOns!: (AddOnForMenu | undefined)[]

  constructor() {
    this.rangeToChooseAddOns = Array.from({length: 10}, (_, i) => i + 1)
    this.chosenNumberOfAddons = []
    this.chosenAddOns = []
    this.finishSelectingAddOns = new EventEmitter()
  }

  chooseNumberOfAddOns(clickedOption: any) {
    const length = clickedOption.selectedIndex
    if (!length) this.finishSelectingAddOns.emit({allRight: true} as IMissingAddon)

    if (this.chosenAddOns.length) this.chosenAddOns = this.chosenAddOns.slice(0, length - 1)
    this.chosenNumberOfAddons = Array.from({length}, (_, i) => i + 1)
  }

  onAddOnChange(selectedAddOn: any, addOnIndex: number) {
    const index = selectedAddOn.target.selectedIndex - 1
    if (index <= -1) {
      this.chosenAddOns[addOnIndex] = undefined
        // console.log(this.chosenAddOns)
      return
    }

    this.chosenAddOns[addOnIndex] = this.addOns[index]
    // console.log(this.chosenAddOns)
    this.finishSelectingAddOns.emit(this.allAddOnsSelected())
  }

  allAddOnsSelected(): IMissingAddon{
    let [missingChoose, index] = [false, 0]

    for (index = 0; index < this.chosenAddOns.length; index++){
      if(!this.chosenAddOns[index]) {
        missingChoose = true
        break
      }
    }

    if (missingChoose) {
      const allRight = false
      const missing = `${index + 1}º adicional do ${this.itemIndex + 1}º item pendente!`

      if (this.item instanceof PortionForMenu) {
        return {allRight, missing: missing.replace('item', 'porção')} as IMissingAddon
      }
      return {allRight, missing: missing.replace('item', 'hambúrguer')} as IMissingAddon
    }

    return {allRight: true} as IMissingAddon
  }
}

