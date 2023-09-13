import {CategoryDTO} from "../types/CategoryDTO";

export class BurgerCategory {
  private readonly identifier: string
  private title: string
  private deleted: boolean
  private editable: boolean
  public editing: string

  constructor(categoryDTO: CategoryDTO) {
    this.identifier = categoryDTO.identifier
    this.title = categoryDTO.title
    this.deleted = categoryDTO.deleted
    this.editable = false
    this.editing = categoryDTO.title
  }
  getIdentifier(): string {
    return this.identifier;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(value: string) {
    this.title = value.toUpperCase();
  }
  setDeleted(value: boolean) {
    this.deleted = value;
  }
  getEditable() {
    return this.editable
  }
  setEditable(editable: boolean){
    this.editable = editable
  }
  toDTO(): CategoryDTO {
    return {identifier: this.identifier, title: this.title} as CategoryDTO
  }
}
