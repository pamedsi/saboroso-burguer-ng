import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from "../../../../services/MenuService";
import {CurrencyPipe} from "@angular/common";
import {PortionForMenu} from "../../../../models/Menu/PortionForMenu";
import {ComboForMenu} from "../../../../models/Menu/ComboForMenu";
import {DrinkForMenu} from "../../../../models/Menu/DrinkForMenu";
import {AddOnForMenu} from "../../../../models/Menu/AddOnForMenu";
import {BurgerForMenu} from "../../../../models/Menu/BurgerForMenu";
import {MenuItem} from "../../../../models/Menu/MenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() nextStep = new EventEmitter()

  availableBurgers!: {[category: string]: BurgerForMenu[]}
  availablePortions!: PortionForMenu[]
  availableCombos!: ComboForMenu[]
  availableDrinks!: DrinkForMenu[]
  availableAddOns!: AddOnForMenu[]

  chosenBurgers: BurgerForMenu[]
  chosenPortions: PortionForMenu[]
  chosenDrinks: DrinkForMenu[]
  chosenAddOns: AddOnForMenu[]

  constructor (private menuService: MenuService, private currencyPipe: CurrencyPipe) {
    this.chosenBurgers = []
    this.chosenPortions = []
    this.chosenDrinks = []
    this.chosenAddOns = []
  }

  ngOnInit() {
    this.menuService.getMenu()
    this.menuService.getBurgersForMenu().subscribe(burgers => this.availableBurgers = burgers)
    this.menuService.getPortionsForMenu().subscribe(portions => this.availablePortions = portions)
    this.menuService.getCombosForMenu().subscribe(combos => this.availableCombos = combos)
    this.menuService.getDrinksForMenu().subscribe(drinks => this.availableDrinks = drinks)
    this.menuService.getAddOnsForMenu().subscribe(addOns => this.availableAddOns = addOns)
  }
  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }
  burgerCaster(burger: any): BurgerForMenu {
    return burger as BurgerForMenu;
  }
  goToNextStep(){
    this.nextStep.emit([this.chosenBurgers, this.chosenPortions, this.chosenDrinks])
  }

  addItem(item: MenuItem) {
    if (item instanceof BurgerForMenu) this.chosenBurgers.push(item)
    else if (item instanceof PortionForMenu) this.chosenPortions.push(item)
    else if (item instanceof DrinkForMenu) this.chosenDrinks.push(item)
    else if (item instanceof AddOnForMenu) this.chosenAddOns.push(item);
    else return
    item.incrementQuantity()
  }

  removeLastOccurrence(array: MenuItem[], item: MenuItem) {
    const index = array.reverse().findIndex(i => i.getIdentifier() === item.getIdentifier());
    if (index !== -1) {
      array.splice(array.length - 1 - index, 1);
    }
    array.reverse();
  }

  removeItem(item: MenuItem) {
    if(item.getQuantity() <= 0) return
    const identifier = item.getIdentifier();
    if (item instanceof BurgerForMenu) this.removeLastOccurrence(this.chosenBurgers, item);
    else if (item instanceof PortionForMenu) this.removeLastOccurrence(this.chosenPortions, item);
    else if (item instanceof DrinkForMenu) this.removeLastOccurrence(this.chosenDrinks, item);
    else if (item instanceof AddOnForMenu) this.removeLastOccurrence(this.chosenAddOns, item);
    else return;
    item.decrementQuantity();
  }

}
