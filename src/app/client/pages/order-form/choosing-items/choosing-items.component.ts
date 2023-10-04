import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from "../../../services/MenuService";
import {CurrencyPipe} from "@angular/common";
import {PortionForMenu} from "../../../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../../../factories/Menu/DrinkForMenu";
import {BurgerForMenu} from "../../../factories/Menu/BurgerForMenu";
import {MenuItem} from "../../../factories/Menu/MenuItem";
import {ClientOrderDTO} from "../../../models/ClientOrderDTO";
import {WIthPriceFormatter} from "../../../../shared/utils/PriceFormatter";

@Component({
  selector: 'app-choosing-items',
  templateUrl: './choosing-items.component.html',
  styleUrls: ['./choosing-items.component.css']
})
export class ChoosingItemsComponent extends WIthPriceFormatter {
  @Output() nextStep = new EventEmitter()
  @Output() changeOrder  = new EventEmitter()

  hidden = false

  availableBurgers!: {[category: string]: BurgerForMenu[]}
  availablePortions!: PortionForMenu[]
  availableDrinks!: DrinkForMenu[]

  private readonly currentOrder: ClientOrderDTO

  constructor (
    private menuService: MenuService,
    currencyPipe: CurrencyPipe
  ) {
    super(currencyPipe)

    this.currentOrder = {
      burgers: [],
      portions: [],
      drinks: []
    } as ClientOrderDTO
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
    if (
      !this.currentOrder.burgers.length &&
      !this.currentOrder.portions.length &&
      !this.currentOrder.drinks.length
    ) {
      console.info('É necessário pedir pelo menos um dis itens: hambúrguer, porção ou bebida!')
      return
    }
    this.nextStep.emit(this.currentOrder)
    this.hidden = true
  }
  addItem(item: MenuItem) {
    if (item instanceof BurgerForMenu) {
      this.currentOrder.burgers.push(new BurgerForMenu(item.toDTO()));
    }
    else if (item instanceof PortionForMenu) {
      this.currentOrder.portions.push(new PortionForMenu(item.toDTO()));
    }
    else if (item instanceof DrinkForMenu) this.currentOrder.drinks.push(item);
    else return;

    item.incrementQuantity();
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
    if (item instanceof BurgerForMenu) this.removeFirstOccurrence(this.currentOrder.burgers, item);
    else if (item instanceof PortionForMenu) this.removeFirstOccurrence(this.currentOrder.portions, item);
    else if (item instanceof DrinkForMenu) this.removeFirstOccurrence(this.currentOrder.drinks, item);
    else return;
    item.decrementQuantity();
  }

  onOrderChange(){
    // Resetando detalhes do pão ao voltar à edição
    this.currentOrder.burgers.forEach(burger => {
      burger.setBread(undefined)
      burger.setCombo(null)
      burger.setAddOns([])
    })

    this.currentOrder.portions.forEach(portion => {
      portion.setAddOns([])
    })
    this.hidden = false
    this.changeOrder.emit()
  }
}
