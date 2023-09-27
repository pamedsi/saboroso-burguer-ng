import {IngredientDTO} from "../../types/MenuItemDTO/IngredientDTO";

export class IngredientForManagement {
  private readonly identifier: string
  private title: string
  private grams: number | null
  private inStock: boolean

  // Component props
  titleEditing: string
  gramsEditing: string | number | null
  inStockEditing: boolean | string
  private editable: boolean

  constructor(ingredientDTO: IngredientDTO) {
    this.identifier = ingredientDTO.identifier
    this.title = ingredientDTO.title
    this.grams = ingredientDTO.grams
    this.inStock = ingredientDTO.inStock

    this.titleEditing = ingredientDTO.title
    if (ingredientDTO.grams) this.gramsEditing = ingredientDTO.grams
    else this.gramsEditing = ''
    this.editable = false
    this.inStockEditing = 'not-clicked-yet'
  }

  ingredientToString(): string {
    return this.grams ? `${this.title} ${this.grams} gramas` : this.title;
  }
  gramsToString(): string {
    return this.grams ? `${this.grams.toString()}` : "Sem gramas"
  }
  getIdentifier(){
    return this.identifier
  }
  getTitle(): string {
    return this.title;
  }
  getEditable(): boolean {
    return this.editable;
  }
  setEditable(value: boolean): void {
     this.editable = value
  }
  setTitle(value: string) {
    this.title = value;
  }
  getGrams(): number | null {
    return this.grams;
  }
  setGrams(value: number | null) {
    this.grams = value;
  }
  toDTO(){
    if (!this.grams) return {identifier: this.identifier, title: this.title, inStock: this.inStock} as IngredientDTO
    return {identifier: this.identifier, title: this.title, grams: this.grams, inStock: this.inStock} as IngredientDTO
  }
  getInStock() {
    return this.inStock
  }

  // Component props
  setInStock() {
    if (typeof this.inStockEditing === 'string') return
    this.inStock = this.inStockEditing;
  }
  getOptionsForInStock(): string[]{
    return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
  onOptionSelected(yesOrNo: any) {
    this.inStockEditing = yesOrNo.value === 'Sim'
  }
}
