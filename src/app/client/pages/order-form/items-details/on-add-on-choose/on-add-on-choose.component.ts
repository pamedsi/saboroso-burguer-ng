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

  rangeToChooseAddOns!: number[]
  chosenNumberOfAddOns!: number[]
  chosenAddOns!: (AddOnForMenu | undefined)[]

  constructor() {
    this.rangeToChooseAddOns = Array.from({length: 10}, (_, i) => i + 1)
    this.chosenNumberOfAddOns = []
    this.chosenAddOns = []
    this.addOnsStatus = new EventEmitter()
  }

  chooseNumberOfAddOns(clickedOption: any) {
    const length = clickedOption.selectedIndex
    if (!length) this.addOnsStatus.emit({allRight: true} as IAddOnStatus)
    if (this.chosenAddOns.length) this.chosenAddOns = this.chosenAddOns.slice(0, length)

    this.chosenNumberOfAddOns = Array.from({length}, (_, i) => i + 1)

    this.addOnsStatus.emit(this.getAddOnStatus())
  }

  onAddOnChange(selectedAddOn: any, addOnIndex: number) {
    const index = selectedAddOn.target.selectedIndex

    // Se for selecionada a primeira opção, que é a "Escolher adicional"
    // Ponho um 'undefined' no index pra que a verificação no método "addOnsStatus" retorne false
    if (!index)  this.chosenAddOns[addOnIndex] = undefined

    // Caso contrário, insiro o adicional clicado à lista de adicionais escolhidos
    else  this.chosenAddOns[addOnIndex] = this.allAddOns[index - 1]

    this.addOnsStatus.emit(this.getAddOnStatus())
  }

  getAddOnStatus(): IAddOnStatus{
    let [missingChoose, index] = [false, 0]

    for (index = 0; index < this.chosenNumberOfAddOns.length; index++){
      if(!this.chosenAddOns[index]) {
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
