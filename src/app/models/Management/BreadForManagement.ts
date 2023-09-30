import {BreadDTO} from "../../types/MenuItemDTO/BreadDTO";

export class BreadForManagement {
  private readonly identifier: string;
  private title: string;
  private inStock: boolean

  // Component props
  titleEditing: string
  inStockEditing: boolean
  private editable: boolean

  constructor(breadDTO: BreadDTO) {
    this.identifier = breadDTO.identifier;
    this.title = breadDTO.title;
    this.inStock = breadDTO.inStock

    this.titleEditing = this.title
    this.inStockEditing = this.inStock
    this.editable = false
  }

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
  public getIdentifier(): string {
    return this.identifier;
  }

  public getTitle(): string {
    return this.title;
  }

  public isInStock() {
    return this.inStock
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setInStock(value: boolean) {
    this.inStock = value
  }

  toDTO(){
    return {identifier: this.identifier ,title: this.title, inStock: this.inStock} as BreadDTO
  }
}
