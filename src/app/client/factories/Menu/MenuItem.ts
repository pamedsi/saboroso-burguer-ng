import {BaseMenuItemDTO} from "../../../shared/models/BaseMenuItemDTO";

export abstract class MenuItem {
  protected readonly identifier: string
  protected readonly title: string
  protected readonly price: number
  protected quantity: number

  protected constructor(menuItem: BaseMenuItemDTO) {
    this.identifier = menuItem.identifier
    this.title = menuItem.title
    this.price = Number(menuItem.price)
    this.quantity = 0
  }

  getIdentifier(){
    return this.identifier
  }
  getTitle(){
    return this.title
  }
  getPrice(){
    return this.price
  }
  getQuantity(){
    return this.quantity
  }
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 0) this.quantity--
  }
}
