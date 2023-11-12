import {BaseMenuItemDTO} from "../../../shared/models/BaseMenuItemDTO";

export class AddOnForManagement {
  private identifier: string;
  private title: string;
  private price: number;
  private pic: string | null
  private inStock: boolean;


  // Component props
  titleEditing: string;
  priceEditing: number;
  inStockEditing: boolean;
  picEditing: string | null
  editable: boolean;

  constructor(addOnDTO: BaseMenuItemDTO) {
    this.identifier = addOnDTO.identifier;
    this.title = addOnDTO.title;
    this.price = addOnDTO.price;
    this.inStock = addOnDTO.inStock;
    this.pic = addOnDTO.pic

    this.titleEditing = this.title;
    this.priceEditing = this.price;
    this.inStockEditing = this.inStock;
    this.editable = false;
    this.picEditing = this.pic
  }
  // Component methods
  isEditable(): boolean {
    return this.editable
  }
  setEditable(value: boolean): void {
    this.editable = value
  }
  setInStockSelect(target: any) {
    this.inStockEditing = target.value === 'Sim'
  }
  getOptionsForInStock() {
    return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
  setPicEditing(pic: string | null){
    this.picEditing = pic
  }

  // Model methods
  getIdentifier(): string {
    return this.identifier;
  }
  setIdentifier(identifier: string): void {
    this.identifier = identifier;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  getPrice(): number {
    return this.price;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  isInStock(): boolean {
    return this.inStock;
  }
  setInStock(inStock: boolean): void {
    this.inStock = inStock;
  }

  toDTO() {
    return {
      identifier: this.identifier,
      title: this.title,
      price: this.price,
      pic: this.pic,
      inStock: this.inStock
    } as BaseMenuItemDTO
  }

  getPic() {
   return this.pic
  }
  setPic(pic: string | null) {
    this.pic = pic
  }
}
