import {Component, OnInit} from '@angular/core';
import {BurgerService} from "../../../../services/BurgerService";
import {PortionService} from "../../../../services/PortionService";
import {ComboService} from "../../../../services/ComboService";
import {DrinkService} from "../../../../services/DrinkService";
import {AddOnService} from "../../../../services/AddOnService";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(
      private burgerService: BurgerService,
      private portionService: PortionService,
      private comboService: ComboService,
      private drinkService: DrinkService,
      private addOnService: AddOnService
  ) {}

  ngOnInit() {
  }

}
