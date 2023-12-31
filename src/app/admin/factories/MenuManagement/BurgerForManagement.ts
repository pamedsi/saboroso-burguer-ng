import { IngredientDTO } from "src/app/shared/models/MenuItemDTO/IngredientDTO"
import { BurgerDTO } from "../../../shared/models/MenuItemDTO/BurgerDTO"
import {IngredientForManagement} from "./IngredientForManagement";
import {CategoryForManagement} from "./CategoryForManagement";
import {CategoryDTO} from "../../../shared/models/MenuItemDTO/CategoryDTO";

export class BurgerForManagement {
  private readonly identifier: string
  private title: string
  private category: CategoryForManagement
  private price: number
  private pic: string | null
  private ingredients: IngredientForManagement[]
  private inStock: boolean

  // Component props:

  private editable: boolean
  titleEditing: string
  categoryEditing: CategoryForManagement
  priceEditing: number
  picEditing!: string
  ingredientsEditing: IngredientForManagement[]
  inStockEditing: boolean
  selectedCategoryIdentifier: string;

  constructor(burgerFromRequest: BurgerDTO) {
    this.identifier = burgerFromRequest.identifier
    this.category = new CategoryForManagement(burgerFromRequest.categoryDTO)
    this.title = burgerFromRequest.title
    this.price = Number(burgerFromRequest.price)
    this.pic = burgerFromRequest.pic
    this.ingredients = burgerFromRequest.ingredients.map(ingredient => new IngredientForManagement(ingredient))
    this.inStock = burgerFromRequest.inStock

    // Component props
    this.editable = false
    this.titleEditing = this.title
    this.categoryEditing = this.category
    this.priceEditing = this.price
    this.ingredientsEditing = this.ingredients
    this.inStockEditing = this.inStock
    this.selectedCategoryIdentifier = this.getCategory().getIdentifier()
  }

  getIdentifier(): string {
    return this.identifier;
  }

  getCategory(): CategoryForManagement {
    return this.category;
  }

  getTitle(): string {
    return this.title;
  }

  getPriceToString(): string {
    return `R$ ${this.price.toFixed(2).replace('.', ',')}`
  }
  getPrice(){
    return this.price
  }
  getPic(): string | null {
    return this.pic;
  }
  getIngredients(){
    return this.ingredients
  }
  ingredientsToString(): string {
    if (this.ingredients.length === 0) return "Sem ingredientes"
    const stringToBeReturned: string[] =
      this.ingredients.map(ingredient =>
      ingredient.getGrams() ? `${ingredient.getGrams()} gramas de ${ingredient.getTitle()}` : ingredient.getTitle()
    );
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }
  setIngredients(ingredients: IngredientForManagement[]){
    this.ingredients = ingredients
  }
  getInStock(): boolean {
    return this.inStock
  }
  setInStock(inStock: boolean) {
    this.inStock = inStock
  }
  setCategory(burgerCategory: CategoryForManagement){ this.category = burgerCategory }
  setTitle(title: string){ this.title = title}
  setPrice(price: number){ this.price = price }
  setPic(pic: string){ this.pic = pic }

  // Component methods:
  getEditable(): boolean {
    return this.editable
  }
  setEditable(value: boolean){
    this.editable = value
  }
  setPicEditing(pic: string){ this.picEditing = pic }

  onInStockSelected(target: any) {
    this.inStockEditing = target.value === 'Sim'
  }
  getOptionsForInStock() {
    return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
  onCategorySelected(target: any, categories: CategoryForManagement[]) {
    const selectedCategory = categories.find(category => {
      return target.value === category.getTitle()
    })

    if (!selectedCategory) return
    this.categoryEditing = selectedCategory
  }
  getOptionsForCategories(categories: CategoryForManagement[]){
    const currentCategory = categories.find(category =>
      category.getIdentifier() === this.categoryEditing.getIdentifier()
    )
    if (!currentCategory) {
      const listToReturn = [...categories]
      listToReturn.unshift(new CategoryForManagement({title: "Categoria deletada!"} as CategoryDTO))
      return listToReturn
    }
    const listWithoutCurrentCategory = categories.filter( category =>
      category.getIdentifier() !== currentCategory.getIdentifier()
    )

    listWithoutCurrentCategory.unshift(currentCategory)
    return listWithoutCurrentCategory
  }
  getOptionsForIngredients(allIngredients: IngredientForManagement[]) {
    const ingredientDeleted = this.ingredientsEditing.find(ingredient =>
      !allIngredients.includes(ingredient)
    )
    if (!ingredientDeleted) return allIngredients

    return allIngredients.filter(ingredient =>
      ingredient.getIdentifier() !== ingredientDeleted.getIdentifier()
    )
  }
  getSelectedIngredients(allIngredients: IngredientForManagement[]) {
    const ingredientDeleted = this.ingredientsEditing.find(ingredient =>
      !allIngredients.includes(ingredient)
    )
    if (!ingredientDeleted) return this.ingredientsEditing

    return this.ingredientsEditing.filter(ingredient =>
      ingredient.getIdentifier() !== ingredientDeleted.getIdentifier()
    )
  }

  // Service methods
  toDTO(): BurgerDTO {
    return {
      identifier: this.identifier,
      categoryDTO: this.category.toDTO(),
      title: this.title,
      price: this.price,
      pic: this.pic ? this.pic : null,
      inStock: this.inStock,
      ingredients: this.ingredientsToDTO(this.ingredients)
    } as BurgerDTO
  }

  ingredientsToDTO(ingredients: IngredientForManagement[]){
    return ingredients.map(ingredient => {
      return {
        identifier: ingredient.getIdentifier(),
        title: ingredient.getTitle(),
        grams: ingredient.getGrams(),
        inStock: ingredient.getInStock()
      } as IngredientDTO
    })
  }
}
