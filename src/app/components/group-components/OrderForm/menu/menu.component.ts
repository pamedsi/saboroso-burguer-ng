import {Component, OnInit} from '@angular/core';
import {BurgerService} from "../../../../services/BurgerService";
import {PortionService} from "../../../../services/PortionService";
import {ComboService} from "../../../../services/ComboService";
import {DrinkService} from "../../../../services/DrinkService";
import {AddOnService} from "../../../../services/AddOnService";
import {Portion} from "../../../../models/Portion";
import {Combo} from "../../../../models/Combo";
import {Drink} from "../../../../models/Drink";
import {AddOn} from "../../../../models/AddOn";
import {MenuBurgersDTO} from "../../../../types/MenuBurgersDTO";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  allAvailableBurgers!: MenuBurgersDTO
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

  ngOnInit() {
    this.burgerService.currentMenuBurgers.subscribe(menuBurgers => {
      this.allAvailableBurgers = menuBurgers;
    });
    this.burgerService.getBurgersForMenu();

    this.portionService.currentMenuPortions.subscribe(menuPortions => {
      this.allAvailablePortions = menuPortions;
    });
    this.portionService.getPortionsForMenu();

    this.comboService.currentMenuCombos.subscribe(menuCombos => {
      this.allAvailableCombos = menuCombos;
    });
    this.comboService.getCombosForMenu();

    this.drinkService.currentMenuDrinks.subscribe(menuDrinks => {
      this.allAvailableDrinks = menuDrinks;
    });
    this.drinkService.getDrinksForMenu();

    this.addOnService.currentMenuAddOns.subscribe(menuAddOns => {
      this.allAddOnsService = menuAddOns;
    });
    this.addOnService.getAddOnsForMenu();
  }

}
