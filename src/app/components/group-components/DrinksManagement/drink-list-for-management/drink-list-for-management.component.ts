import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../../../services/DrinkService";
import {DrinkForManagement} from "../../../../models/Management/DrinkForManagement";
import {CurrencyPipe} from "@angular/common";

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
    if (!changes) {
      console.info('Nenhuma mudança foi feita!')
      drink.setEditable(false)
      return
    }

    this.drinkService.updateDrink(drink.toDTO())
    drink.setEditable(false)
  }

  // updateProperty(drink: DrinkForManagement, property: string): boolean {
  //   const originalValue = (drink[`get${property.charAt(0).toUpperCase() + property.slice(1).toLowerCase()}` as keyof DrinkForManagement] as Function)();
  //   const editingValue = drink[`${property.toLowerCase()}Editing` as keyof DrinkForManagement];
  //
  //   if (originalValue !== editingValue) {
  //     (drink[`set${property.charAt(0).toUpperCase() + property.slice(1).toLowerCase()}` as keyof DrinkForManagement] as Function)(editingValue);
  //     return true;
  //   }
  //
  //   return false;
  // }
  //
  // editDrink(drink: DrinkForManagement) {
  //   const properties = ['title', 'price', 'ml', 'inStock']
  //   const changes = properties.map(property => this.updateProperty(drink, property)).filter(Boolean).length;
  //
  //   if (!changes) {
  //     console.info(`Nenhuma mudança foi feita na bebida ${drink.getTitle()}!`);
  //     drink.setEditable(false);
  //     return;
  //   }
  //   try {
  //     this.drinkService.updateDrink(drink.toDTO());
  //     drink.setEditable(false);
  //   } catch (error) {
  //     console.error(`Erro ao atualizar a bebida ${drink.getTitle()}: ${error}`);
  //   }
  // }
}
