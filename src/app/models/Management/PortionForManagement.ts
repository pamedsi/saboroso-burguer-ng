import {PortionDTO} from "../../types/MenuItemDTO/PortionDTO"


export class PortionForManagement {
  // Model props:
  private readonly identifier: string
  private title: string
  private price: number
  private description: string
  private inStock: boolean
  private pic: string | null

  // Component props:
  titleEditing: string
  priceEditing: number
  descriptionEditing: string
  inStockEditing: boolean
  picEditing: string | null

  private editable: boolean

  constructor(portionDTO: PortionDTO) {
    this.identifier = portionDTO.identifier
    this.title = portionDTO.title
    this.price = portionDTO.price
    this.description = portionDTO.description
    this.inStock = portionDTO.inStock
    this.pic = portionDTO.pic

    // Component Props
    this.titleEditing = this.title
    this.priceEditing = this.price
    this.descriptionEditing = this.description
    this.editable = false
    this.inStockEditing = this.inStock
    this.picEditing = this.pic
  }
  // Model methods:

  getIdentifier() {
    return this.identifier
  }
  getTitle(): string {
    return this.title
  }
  getPrice(): number {
    return this.price
  }
  getDescription(): string {
    return this.description
  }
  getInStock(){
    return this.inStock
  }
  getPic() {
    return this.pic
  }
  setTitle(title: string): void {
    this.title = title
  }
  setPrice(price: number): void {
    this.price = price
  }
  setDescription(description: string): void {
    this.description = description
  }
  setInStock(value: boolean){
    this.inStock = value
  }
  setPic(pic: string | null) {
    this.pic = pic
  }

  // Component methods:

  getEditable(){
    return this.editable
  }
  setEditable(value: boolean){
    this.editable = value
  }
  setInStockSelect(target: any) {
    this.inStockEditing = target.value === 'Sim'
  }
  toDTO(): PortionDTO{
    return {
      identifier: this.identifier,
      title: this.title,
      price: this.price,
      description: this.description,
      pic: this.pic ? this.pic : null,
      inStock: this.inStock
    } as PortionDTO
  }
  getOptionsForInStock() {
      return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
}
