import {CategoryDTO} from "../../types/MenuItemDTO/CategoryDTO";

export class CategoryForManagement {
  private readonly identifier: string
  private title: string
  private editable: boolean
  public editing: string

  constructor(categoryDTO: CategoryDTO) {
    this.identifier = categoryDTO.identifier
    this.title = categoryDTO.title
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
