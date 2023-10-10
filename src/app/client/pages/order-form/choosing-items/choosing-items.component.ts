import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuService} from "../../../services/MenuService";
import {CurrencyPipe} from "@angular/common";
import {PortionForMenu} from "../../../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../../../factories/Menu/DrinkForMenu";
import {BurgerForMenu} from "../../../factories/Menu/BurgerForMenu";
import {MenuItem} from "../../../factories/Menu/MenuItem";
import {ClientOrderDTO} from "../../../models/ClientOrderDTO";
import {WIthPriceFormatter} from "../../../../shared/utils/PriceFormatter";
import {OrderService} from "../../../services/OrderService";

@Component({
  selector: 'app-choosing-items',
  templateUrl: './choosing-items.component.html',
  styleUrls: ['./choosing-items.component.css']
})
export class ChoosingItemsComponent extends WIthPriceFormatter implements OnInit {
  @Output() nextStep = new EventEmitter()
  @Output() backToMe  = new EventEmitter()
  @Input() hidden!: boolean
  order!: ClientOrderDTO

  availableBurgers!: {[category: string]: BurgerForMenu[]}
  availablePortions!: PortionForMenu[]
  availableDrinks!: DrinkForMenu[]

  constructor (
    private menuService: MenuService,
    currencyPipe: CurrencyPipe,
    private orderService: OrderService
  ) {
    super(currencyPipe)
  }

  ngOnInit() {
    this.menuService.getMenu()
    this.menuService.getBurgersForMenu().subscribe(burgers => this.availableBurgers = burgers)
    this.menuService.getPortionsForMenu().subscribe(portions => this.availablePortions = portions)
    this.menuService.getDrinksForMenu().subscribe(drinks => this.availableDrinks = drinks)
    this.orderService.currentOrder.subscribe(order => this.order = order)
  }

  burgerCaster(burger: any): BurgerForMenu {
    return burger as BurgerForMenu;
  }
  goToNextStep(){
    if (
      !this.order.burgers.length &&
      !this.order.portions.length &&
      !this.order.drinks.length
    ) {
      console.info('É necessário pedir pelo menos um dis itens: hambúrguer, porção ou bebida!')
      return
    }

    this.orderService.changeOrder(this.order)
    this.nextStep.emit()
    this.hidden = true
  }
  addItem(item: MenuItem) {
    if (item instanceof BurgerForMenu) {
      this.order.burgers.push(new BurgerForMenu(item.toDTO()));
    }
    else if (item instanceof PortionForMenu) {
      this.order.portions.push(new PortionForMenu(item.toDTO()));
    }
    else if (item instanceof DrinkForMenu) this.order.drinks.push(item);
    else return;

    this.orderService.changeOrder(this.order)
  }
  removeFirstOccurrence(array: MenuItem[], item: MenuItem) {
    const index = array.findIndex(i => i.getIdentifier() === item.getIdentifier());
    if (index !== -1) array.splice(index, 1)
  }
  removeItem(item: MenuItem) {
    if (item instanceof BurgerForMenu) this.removeFirstOccurrence(this.order.burgers, item);
    else if (item instanceof PortionForMenu) this.removeFirstOccurrence(this.order.portions, item);
    else if (item instanceof DrinkForMenu) this.removeFirstOccurrence(this.order.drinks, item);
    else return;
    this.orderService.changeOrder(this.order)
  }

  reChooseItems(){
    this.hidden = false
    this.backToMe.emit()
  }

  countItems(itemToCount: MenuItem){
    let listToSearch: MenuItem[]
    if (itemToCount instanceof BurgerForMenu) listToSearch = this.order.burgers
    else if (itemToCount instanceof PortionForMenu) listToSearch = this.order.portions
    else listToSearch = this.order.drinks

    return listToSearch.reduce((count, item) => count + (item.getIdentifier() === itemToCount.getIdentifier() ? 1 : 0), 0);
  }
}
