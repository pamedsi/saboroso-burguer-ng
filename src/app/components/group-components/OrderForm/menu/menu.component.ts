import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../../services/MenuService";
import {Menu} from "../../../../types/MenuDTO";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu!: Menu

  constructor(
      private menuService: MenuService,
      private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    this.menuService.currentMenu.subscribe(menu => {this.menu = menu})
    this.menuService.getMenu()
  }
  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }
}
