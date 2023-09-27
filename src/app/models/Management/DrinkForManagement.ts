import {DrinkDTO} from "../../types/MenuItemDTO/DrinkDTO";

export class DrinkForManagement {
  private readonly identifier: string;
  private title: string;
  private ml: number;
  private price: number;
  private inStock: boolean;

  // Component props
  titleEditing: string;
  mlEditing: number;
  priceEditing: number;
  inStockEditing: boolean;
  editable: boolean

  constructor(drinkDTO: DrinkDTO) {
    this.identifier = drinkDTO.identifier;
    this.title = drinkDTO.title;
    this.ml = drinkDTO.ml;
    this.price = drinkDTO.price;
    this.inStock = drinkDTO.inStock;

    this.titleEditing = this.title
    this.mlEditing = this.ml
    this.priceEditing = this.price
    this.inStockEditing = this.inStock
    this.editable = false
  }

  // Component methods
  getEditable(): boolean {
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
  toDTO() {
    return {
      identifier: this.identifier,
      title: this.title,
      ml: this.ml,
      price: this.price,
      inStock: this.inStock
    } as DrinkDTO
  }

  // Model methods

  getIdentifier(): string {
    return this.identifier;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getMl(): number {
    return this.ml;
  }

  setMl(value: number) {
    this.ml = value;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number) {
    this.price = value;
  }

  isInStock(): boolean {
    return this.inStock;
  }

  setInStock(value: boolean) {
    this.inStock = value;
  }
}
