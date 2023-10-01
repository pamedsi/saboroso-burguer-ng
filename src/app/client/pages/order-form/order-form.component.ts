import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientOrderDTO} from "../../models/ClientOrderDTO";
import {ComboForMenu} from "../../factories/Menu/ComboForMenu";
import {MenuService} from "../../services/MenuService";
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights: boolean
  order!: ClientOrderDTO
  onDetails: boolean
  onOrderReview: boolean

  breads!: BreadDTO[]
  combos!: ComboForMenu[]
  addOns!: AddOnForMenu[]

  constructor(private router: Router, private menuService: MenuService) {
    this.onHighlights = false
    this.onDetails = false
    this.onOrderReview = false
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
    this.router.navigate!(['/'])
  }
  goToDetails(order: ClientOrderDTO) {
    this.order = order
    this.onDetails = true
  }
  updateOrder(){
    this.onDetails = false
  }
}
