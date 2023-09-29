import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from "../../../../services/MenuService";
import {CurrencyPipe} from "@angular/common";
import {PortionForMenu} from "../../../../models/Menu/PortionForMenu";
import {DrinkForMenu} from "../../../../models/Menu/DrinkForMenu";
import {BurgerForMenu} from "../../../../models/Menu/BurgerForMenu";
import {MenuItem} from "../../../../models/Menu/MenuItem";
import {CustomerOrder} from "../../../../types/Order/CustomerOrder";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() nextStep = new EventEmitter()
  hidden = false

  availableBurgers!: {[category: string]: BurgerForMenu[]}
  availablePortions!: PortionForMenu[]
  availableDrinks!: DrinkForMenu[]

  chosenBurgers: BurgerForMenu[]
  chosenPortions: PortionForMenu[]
  chosenDrinks: DrinkForMenu[]

  constructor (private menuService: MenuService, private currencyPipe: CurrencyPipe) {
    this.chosenBurgers = []
    this.chosenPortions = []
    this.chosenDrinks = []
  }

  ngOnInit() {
    this.menuService.getMenu()
    this.menuService.getBurgersForMenu().subscribe(burgers => this.availableBurgers = burgers)
    this.menuService.getPortionsForMenu().subscribe(portions => this.availablePortions = portions)
    this.menuService.getDrinksForMenu().subscribe(drinks => this.availableDrinks = drinks)
  }
  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }
  burgerCaster(burger: any): BurgerForMenu {
    return burger as BurgerForMenu;
  }
  goToNextStep(){
    if (!this.chosenBurgers.length && !this.chosenPortions.length && !this.chosenDrinks.length) return

    this.hidden = true
    const order = {
      burgers: this.chosenBurgers,
      portions: this.chosenPortions,
      drinks: this.chosenDrinks
    } as CustomerOrder

    this.nextStep.emit(order)
  }
  addItem(item: MenuItem) {
    if (item instanceof BurgerForMenu) this.chosenBurgers.push(item);
    else if (item instanceof PortionForMenu) this.chosenPortions.push(item);
    else if (item instanceof DrinkForMenu) this.chosenDrinks.push(item);
    else return;

    item.incrementQuantity();

    // const identifier = item.getIdentifier();
    // let list: MenuItem[];
    //
    // if (item instanceof BurgerForMenu) list = this.chosenBurgers;
    // else if (item instanceof PortionForMenu) list = this.chosenPortions;
    // else if (item instanceof DrinkForMenu) list = this.chosenDrinks;
    // else return;
    //
    // const existingItem = list.find(i => i.getIdentifier() === identifier);
    // if (!existingItem) list.push(item);
    //
    // item.incrementQuantity();
  }

  removeFirstOccurrence(array: MenuItem[], item: MenuItem) {
    const index = array.findIndex(i => i.getIdentifier() === item.getIdentifier());
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  removeItem(item: MenuItem) {
    if(item.getQuantity() <= 0) return
    const identifier = item.getIdentifier();
    if (item instanceof BurgerForMenu) this.removeFirstOccurrence(this.chosenBurgers, item);
    else if (item instanceof PortionForMenu) this.removeFirstOccurrence(this.chosenPortions, item);
    else if (item instanceof DrinkForMenu) this.removeFirstOccurrence(this.chosenDrinks, item);
    else return;
    item.decrementQuantity();
  }
  setHidden(value: boolean){
    this.hidden = value
  }

}
