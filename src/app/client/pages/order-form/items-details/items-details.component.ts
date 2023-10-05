import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class ItemsDetailsComponent implements OnInit{
  @Input() orderItems!: ClientOrderDTO

  @Input() addOns!: AddOnForMenu[]
  @Input() combos!: ComboForMenu[]
  @Input() breads!: BreadDTO[]

  @Output() nextStep: EventEmitter<any>

  private finishedBurgerAddOns: IAddOnStatus
  private finishedPortionAddOns: IAddOnStatus
  @Input() hidden!: boolean;

  constructor() {
    this.finishedBurgerAddOns = {allRight: true} as IAddOnStatus
    this.finishedPortionAddOns = {allRight: true} as IAddOnStatus

    this.nextStep = new EventEmitter()
  }

  ngOnInit() {
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
    if (index <= -1) burger.setCombo(null)

    // Caso contrário
    else burger.setCombo(this.combos[index])
  }

  onBreadChange(selectedBread: any, burger: BurgerForMenu) {
    const index = selectedBread.target.selectedIndex
    burger.setBread(this.breads[index])
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
    // Verifica se tem algum hambúrguer sem pão
    if(this.orderItems.burgers.some(burger=> !burger.getBread())) {
      console.info('pão pendente')
      return
    }

    // botei qq coisa só pra ele parar de reclamar
    this.nextStep.emit(this.orderItems)
    this.hidden = !this.hidden
  }

  updateItemsDetails(){
    console.log('oieee')
    this.hidden = false
  }
}
