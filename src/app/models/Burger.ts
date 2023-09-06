
import { IngredientDTO } from "src/app/types/IngredientDTO"
import { BurgerDTO } from "../types/BurgerDTO"
import { BurgerCategory } from "../types/BurgerCategory"

export class Burger {
  private readonly identifier: string
  private title: string
  private category: BurgerCategory
  private price: number
  private pic: string | null
  private ingredients: IngredientDTO[]

  constructor(burgerFromRequest: BurgerDTO) {
    this.identifier = burgerFromRequest.identifier
    this.category = burgerFromRequest.category
    this.title = burgerFromRequest.title
    this.price = burgerFromRequest.price
    this.pic = burgerFromRequest.pic
    this.ingredients = burgerFromRequest.ingredients
  }
  getIdentifier(): string {
    return this.identifier;
  }

  getCategory(): string {
    return this.category;
  }

  getTitle(): string {
    return this.title;
  }

  getPrice(): number {
    return this.price;
  }

  getPic(): string | null {
    return this.pic;
  }
  getIngredients(){
    return this.ingredients
  }
  ingredientsToString(): string {
    if (this.ingredients.length === 0) return "Sem ingredientes"
    const stringToBeReturned: string[] = this.ingredients.map(ingredient => ingredient.grams ? `${ingredient.grams} gramas de ${ingredient.title}` : ingredient.title);
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }
  setCategory(category: BurgerCategory){ this.category = category }
  setTitle(title: string){ this.title = title}
  setPrice(price: number){ this.price = price }
  setPic(pic: string){ this.pic = pic }
  addIngredient(newIngredient: IngredientDTO){
    if (this.ingredients.includes(newIngredient)) return false
    this.ingredients.push(newIngredient)
    return true
  }
  removeIngredient(ingredientToRemove: IngredientDTO): boolean{
    if (!this.ingredients.includes(ingredientToRemove)) return false
    this.ingredients = this.ingredients.filter(ingredient => ingredient.identifier !== ingredientToRemove.identifier)
    return true
  }
}
