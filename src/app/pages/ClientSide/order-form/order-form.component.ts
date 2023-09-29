import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CustomerOrder} from "../../../types/Order/CustomerOrder";
import {ComboForMenu} from "../../../models/Menu/ComboForMenu";
import {MenuService} from "../../../services/MenuService";
import {AddOnForMenu} from "../../../models/Menu/AddOnForMenu";
import {BreadDTO} from "../../../types/MenuItemDTO/BreadDTO";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights: boolean
  order!: CustomerOrder
  onBreadChoose: boolean

  breads!: BreadDTO[]
  combos!: ComboForMenu[]
  addOns!: AddOnForMenu[]

  constructor(private router: Router, private menuService: MenuService){
    this.onHighlights = false
    this.onBreadChoose = false
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
    this.router.navigate(['/'])
  }
  onNextStep(order: CustomerOrder) {
    this.order = order
    this.onBreadChoose = true
  }
}
