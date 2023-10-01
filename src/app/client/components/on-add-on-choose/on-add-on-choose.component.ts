import {Component, Input} from '@angular/core';
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";

@Component({
  selector: 'app-on-add-on-choose',
  templateUrl: './on-add-on-choose.component.html',
  styleUrls: ['./on-add-on-choose.component.css']
})
export class OnAddOnChooseComponent {
  @Input() itemIndex!: number
  @Input() addOns!: AddOnForMenu[]

  chosenNumberOfAddons!: number[]
  numberOfAddons!: number[]

  constructor() {
    this.numberOfAddons = Array.from({length: 10}, (_, i) => i + 1)
    this.chosenNumberOfAddons = []
  }

  chooseNumberOfAddOns(clickedOption: any) {
    const optionSelected = clickedOption.value
    let length

    if (optionSelected === 'Sem adicional') length = 0
    else length = Number(optionSelected)

    this.chosenNumberOfAddons = Array.from({length}, (_, i) => i + 1)
  }
}
