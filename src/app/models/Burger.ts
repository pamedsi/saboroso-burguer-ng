import { IngredientDTO } from "src/app/types/IngredientDTO"
import { BurgerDTO } from "../types/BurgerDTO"
import {Ingredient} from "./Ingredient";
import {BurgerCategory} from "./BurgerCategory";
import {CategoryDTO} from "../types/CategoryDTO";

export class Burger {
  private readonly identifier: string
  private title: string
  private category: BurgerCategory
  // private allCategories!: BurgerCategory[]
  private price: number
  private pic: string | null
  private ingredients: Ingredient[]
  private inStock: boolean

  // Component props:

  private editable: boolean
  titleEditing: string
  categoryEditing: BurgerCategory
  priceEditing: number
  picEditing!: string
  ingredientsEditing: Ingredient[]
  inStockEditing: boolean
  selectedCategoryIdentifier: string;

  constructor(burgerFromRequest: BurgerDTO) {
    this.identifier = burgerFromRequest.identifier
    this.category = new BurgerCategory(burgerFromRequest.category)
    this.title = burgerFromRequest.title
    this.price = Number(burgerFromRequest.price)
    this.pic = burgerFromRequest.pic
    this.ingredients = burgerFromRequest.ingredients.map(ingredient => new Ingredient(ingredient))
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

  getCategory(): BurgerCategory {
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
    const stringToBeReturned: string[] = this.ingredients.map(ingredient => ingredient.getGrams() ? `${ingredient.getGrams()} gramas de ${ingredient.getTitle()}` : ingredient.getTitle());
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }
  setIngredients(ingredients: Ingredient[]){
    this.ingredients = ingredients
  }
  getInStock(): boolean {
    return this.inStock
  }
  setInStock(inStock: boolean) {
    this.inStock = inStock
  }
  setCategory(burgerCategory: BurgerCategory){ this.category = burgerCategory }
  setTitle(title: string){ this.title = title}
  setPrice(price: number){ this.price = price }
  setPic(pic: string){ this.pic = pic }

  addIngredient(newIngredient: Ingredient){
    if (this.ingredients.includes(newIngredient)) return false
    this.ingredients.push(newIngredient)
    return true
  }
  removeIngredient(ingredientToRemove: Ingredient): boolean{
    if (!this.ingredients.includes(ingredientToRemove)) return false
    this.ingredients = this.ingredients.filter(
      ingredient => ingredient.getIdentifier() !== ingredientToRemove.getIdentifier())
    return true
  }

  // Component methods:
  getEditable(): boolean {
    return this.editable
  }
  setEditable(value: boolean){
    this.editable = value
  }
  updateCategoryEditing(allCategories: BurgerCategory[]) {
    const categorySelected = allCategories.find(category => category.getIdentifier() === this.selectedCategoryIdentifier);
    if (!categorySelected) return
    this.categoryEditing = categorySelected
  }
  onInStockSelected(target: any) {
    this.inStockEditing = target.value === 'Sim'
  }
  getOptionsForInStock() {
    return this.inStock ? ['Sim', 'Não'] : ['Não', 'Sim']
  }
  onCategorySelected(target: any, categories: BurgerCategory[]) {
    const selectedCategory = categories.find(category => {
      return target.value === category.getTitle()
    })

    if (!selectedCategory) return
    this.categoryEditing = selectedCategory
  }
  getOptionsForCategories(categories: BurgerCategory[]){
    const currentCategory = categories.find(category =>
      category.getIdentifier() === this.categoryEditing.getIdentifier()
    )
    if (!currentCategory) {
      const listToReturn = [...categories]
      listToReturn.unshift(new BurgerCategory({title: "Categoria deletada!"} as CategoryDTO))
      return listToReturn
    }
    const listWithoutCurrentCategory = categories.filter( category =>
      category.getIdentifier() !== currentCategory.getIdentifier()
    )

    listWithoutCurrentCategory.unshift(currentCategory)
    return listWithoutCurrentCategory
  }

  // Service methods
  toDTO(): BurgerDTO {
    const burgerDTO = {
      identifier: this.identifier,
      category: this.category.toDTO(),
      title: this.title,
      price: this.price.toFixed(2),
      pic: this.pic ? this.pic : null,
      inStock: this.inStock,
      ingredients: this.ingredientsToDTO(this.ingredients)
    } as BurgerDTO
    return burgerDTO
  }

  ingredientsToDTO(ingredients: Ingredient[]){
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
