import { Component } from '@angular/core';

import { BurgerService } from "../../../../services/BurgerService";
import { Burger } from 'src/app/models/Burger';

@Component({
  selector: 'app-menu-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.css']
})
export class MenuBurgerComponent {
  menuBurgerList!: Burger[]
  constructor(
    private burgerService: BurgerService,
    ) {}

  ngOnInit(){
    this.burgerService.getBurgersForMenu().subscribe(burgerList => this.menuBurgerList = burgerList)
  }
}
