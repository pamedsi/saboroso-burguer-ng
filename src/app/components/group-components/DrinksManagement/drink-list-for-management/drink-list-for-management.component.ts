import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../../../services/DrinkService";
import {Drink} from "../../../../models/Drink";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-drink-list-for-management',
  templateUrl: './drink-list-for-management.component.html',
  styleUrls: ['./drink-list-for-management.component.css']
})
export class DrinkListForManagementComponent implements OnInit{
  allDrinks!: Drink[]

  constructor(private drinkService: DrinkService, private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    this.drinkService.currentDrinks.subscribe(drinks => this.allDrinks = drinks)
    this.drinkService.getDrinks()
  }

  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }

  deleteDrink(identifier: string) {
    this.drinkService.removeDrink(identifier)
    this.drinkService.getDrinks()
  }
}
