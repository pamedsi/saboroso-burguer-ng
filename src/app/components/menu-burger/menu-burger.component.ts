import { Component } from '@angular/core';
import { MenuBurger } from "./MenuBurger";
import { BurgerService } from "../../services/BurgerService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-menuBurger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.css']
})
export class MenuBurgerComponent {
  menuBurgerList!: MenuBurger[]
  highLightBurgerList!: MenuBurger[]
  constructor(
    private burgerService: BurgerService,
    private router: Router
    ) {
  }
  ngOnInit(){
    this.burgerService.getBurgersForMenu().subscribe((burgerList) =>{
      this.menuBurgerList = burgerList.map(burger => new MenuBurger(burger))
    })
    this.burgerService.getBurgersForHighLight().subscribe((burgerList) =>{
      this.menuBurgerList = burgerList.map(burger => new MenuBurger(burger))
    })
  }
}
