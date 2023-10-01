import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from "../../../services/MenuService";
import {CurrencyPipe} from "@angular/common";
import {PortionForMenu} from "../../../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../../../factories/Menu/DrinkForMenu";
import {BurgerForMenu} from "../../../factories/Menu/BurgerForMenu";
import {MenuItem} from "../../../factories/Menu/MenuItem";
import {ClientOrderDTO} from "../../../models/ClientOrderDTO";
import {WIthPriceFormatter} from "../../../../shared/utils/PriceFormatter";
import {ComboService} from "../../../../admin/services/ComboService";
import {AddOnService} from "../../../../admin/services/AddOnService";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends WIthPriceFormatter {
  @Output() nextStep = new EventEmitter()
  @Output() changeOrder  = new EventEmitter()

  hidden = false

  availableBurgers!: {[category: string]: BurgerForMenu[]}
  availablePortions!: PortionForMenu[]
  availableDrinks!: DrinkForMenu[]

  chosenBurgers: BurgerForMenu[]
  chosenPortions: PortionForMenu[]
  chosenDrinks: DrinkForMenu[]

  constructor (
    private menuService: MenuService,
    currencyPipe: CurrencyPipe
  ) {
    super(currencyPipe)
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

  burgerCaster(burger: any): BurgerForMenu {
    return burger as BurgerForMenu;
  }
  goToNextStep(){
    if (!this.chosenBurgers.length && !this.chosenPortions.length && !this.chosenDrinks.length) return

    const order = {
      burgers: this.chosenBurgers,
      portions: this.chosenPortions,
      drinks: this.chosenDrinks
    } as ClientOrderDTO

    this.nextStep.emit(order)
    this.hidden = true
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
  onOrderChange(){
    this.hidden = false
    this.changeOrder.emit()
  }

}
