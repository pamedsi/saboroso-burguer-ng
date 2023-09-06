
import { IngredientDTO } from "src/app/dto/IngredientDTO"
import { BurgerDTO } from "../dto/BurgerDTO"

export class Burger {
  private readonly identifier: string
  private readonly category: string
  private readonly title: string
  private readonly price: number
  private readonly pic: string | null
  private readonly ingredientsList: IngredientDTO[]

  constructor(burgerFromRequest: BurgerDTO) {
    this.identifier = burgerFromRequest.identifier
    this.category = burgerFromRequest.category
    this.title = burgerFromRequest.title
    this.price = burgerFromRequest.price
    this.pic = burgerFromRequest.pic
    this.ingredientsList = burgerFromRequest.ingredients
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
    return this.ingredientsList
  }
  ingredientsToString(): string {
    const stringToBeReturned: string[] = this.ingredientsList.map(ingredient => ingredient.grams ? `${ingredient.grams} gramas de ${ingredient.title}` : ingredient.title);
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }
}