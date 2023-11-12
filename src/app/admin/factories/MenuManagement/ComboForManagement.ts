import {ComboDTO} from "../../../shared/models/MenuItemDTO/ComboDTO";

export class Combo {
  private readonly identifier: string;
  private title: string;
  private price: number;
  private pic: string | null
  private description: string;
  private inStock: boolean;

  // Component props:
  titleEditing: string;
  priceEditing: number;
  descriptionEditing: string;
  inStockEditing: boolean;
  editable: boolean;
  picEditing: string | null;

  constructor(combo: ComboDTO) {
    this.identifier = combo.identifier;
    this.title = combo.title;
    this.price = combo.price;
    this.pic = combo.pic
    this.description = combo.description;
    this.inStock = combo.inStock;

    // Component Props
    this.titleEditing = this.title;
    this.priceEditing = this.price;
    this.picEditing = this.pic
    this.descriptionEditing = this.description;
    this.inStockEditing = this.inStock;
    this.editable = false;
  }

  // Component methods:

  isEditable(){
    return this.editable
  }
  setEditable(value: boolean){
    this.editable = value
  }
  setInStockSelect(target: any) {
    this.inStockEditing = target.value === 'Sim'
  }
  toDTO(): ComboDTO{
    return {
      identifier: this.identifier,
      title: this.title,
      price: this.price,
      pic: this.pic,
      description: this.description,
      inStock: this.inStock
    } as ComboDTO
  }
  getOptionsForInStock() {
    return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
  setPicEditing(pic: string | null){
    this.picEditing = pic
  }

  // Model methods:

  getIdentifier(): string {
    return this.identifier;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number) {
    this.price = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  isInStock(): boolean {
    return this.inStock;
  }

  setInStock(value: boolean) {
    this.inStock = value;
  }
  getPic() {
    return this.pic
  }

  setPic(pic: string | null) {
    this.pic = pic
  }
}
