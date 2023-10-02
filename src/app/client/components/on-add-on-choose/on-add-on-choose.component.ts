import {Component, Input} from '@angular/core';
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../factories/Menu/BurgerForMenu";
import {MenuItem} from "../../factories/Menu/MenuItem";
import {PortionForMenu} from "../../factories/Menu/PortionForMenu";

@Component({
  selector: 'app-on-add-on-choose',
  templateUrl: './on-add-on-choose.component.html',
  styleUrls: ['./on-add-on-choose.component.css']
})
export class OnAddOnChooseComponent {
  @Input() item!: BurgerForMenu | PortionForMenu
  @Input() itemIndex!: number
  @Input() addOns!: AddOnForMenu[]

  rangeToChooseAddOns!: number[]
  chosenNumberOfAddons!: number[]
  chosenAddOns!: (AddOnForMenu | undefined)[]

  constructor() {
    this.rangeToChooseAddOns = Array.from({length: 10}, (_, i) => i + 1)
    this.chosenNumberOfAddons = []
    this.chosenAddOns = []
  }

  chooseNumberOfAddOns(clickedOption: any) {
    const length = clickedOption.selectedIndex

    if (this.chosenAddOns.length) this.chosenAddOns = this.chosenAddOns.slice(0, length - 1)
    this.chosenNumberOfAddons = Array.from({length}, (_, i) => i + 1)
  }

  onAddOnChange(selectedAddOn: any, addOnIndex: number) {
    const index = selectedAddOn.target.selectedIndex - 1
    if (index <= -1) {
      this.chosenAddOns[addOnIndex] = undefined
        console.log(this.chosenAddOns)
      return
    }

    const chosenAddOn = this.addOns[index]
    this.chosenAddOns[addOnIndex] = chosenAddOn
    console.log(this.chosenAddOns)
  }

  finishAddOns(){
    let [missingChoose, index] = [false, 0]

    for (index = 0; index < this.chosenAddOns.length; index++){
      if(!this.chosenAddOns[index]) {
        missingChoose = true
        break
      }
    }

    if (missingChoose) console.log(`tá faltando escolher o ${index + 1}º adicional`)
  }
}

