import { Component } from '@angular/core';
import {BurgerService} from "../../../../services/BurgerService";
import {PortionService} from "../../../../services/PortionService";
import {ComboService} from "../../../../services/ComboService";
import {DrinkService} from "../../../../services/DrinkService";
import {AddOnService} from "../../../../services/AddOnService";
import {Burger} from "../../../../models/Burger";
import {Portion} from "../../../../models/Portion";
import {Combo} from "../../../../models/Combo";
import {Drink} from "../../../../models/Drink";
import {AddOn} from "../../../../models/AddOn";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  allAvailableBurgers!: Burger[]
  allAvailablePortions!: Portion[]
  allAvailableCombos!: Combo[]
  allAvailableDrinks!: Drink[]
  allAddOnsService!: AddOn[]

  constructor(
      private burgerService: BurgerService,
      private portionService: PortionService,
      private comboService: ComboService,
      private drinkService: DrinkService,
      private addOnService: AddOnService
  ) {}


}
