import {AddOnDTO} from "../types/AddOnDTO";

export class AddOn {
  private identifier: string;
  private title: string;
  private price: number;
  private inStock: boolean;

  // Component props
  titleEditing: string;
  priceEditing: number;
  inStockEditing: boolean;
  editable: boolean;

  constructor(addOnDTO: AddOnDTO) {
    this.identifier = addOnDTO.identifier;
    this.title = addOnDTO.title;
    this.price = addOnDTO.price;
    this.inStock = addOnDTO.inStock;

    this.titleEditing = this.title;
    this.priceEditing = this.price;
    this.inStockEditing = this.inStock;
    this.editable = false;
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
}
