import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../../../services/DrinkService";

import {CurrencyPipe} from "@angular/common";
import {DrinkForManagement} from "../../../../factories/MenuManagement/DrinkForManagement";

@Component({
  selector: 'app-drink-list-for-management',
  templateUrl: './drink-list-for-management.component.html',
  styleUrls: ['./drink-list-for-management.component.css']
})
export class DrinkListForManagementComponent implements OnInit{
  allDrinks!: DrinkForManagement[]

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
  }

  cancelEditing(drink: DrinkForManagement) {
    drink.titleEditing = drink.getTitle();
    drink.priceEditing = drink.getPrice();
    drink.mlEditing = drink.getMl();
    drink.inStockEditing = drink.isInStock();
    drink.setEditable(false);
  }

  editDrink(drink: DrinkForManagement) {
    let changes = 0

    if (drink.getTitle() !== drink.titleEditing) {
      drink.setTitle(drink.titleEditing);
      changes++
    }
    if (drink.getPrice() !== drink.priceEditing) {
      drink.setPrice(drink.priceEditing);
      changes++
    }
    if (drink.getMl() !== drink.mlEditing) {
      drink.setMl(drink.mlEditing);
      changes++
    }
    if (drink.isInStock() !== drink.inStockEditing) {
      drink.setInStock(drink.inStockEditing);
      changes++
    }
    if (drink.getPic() !==  drink.picEditing) {
      drink.setPic(drink.picEditing);
      changes++
    }
    if (!changes) {
      console.info('Nenhuma mudança foi feita!')
      drink.setEditable(false)
      return
    }

    this.drinkService.updateDrink(drink.toDTO())
    console.log(drink.toDTO())
    drink.setEditable(false)
  }


}
