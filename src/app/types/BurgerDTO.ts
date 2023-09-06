import { BurgerCategory } from "./BurgerCategory";
import { IngredientDTO } from "./IngredientDTO";

export interface BurgerDTO {
  identifier: string
  category: BurgerCategory
  title: string
  price: number
  pic: string | null
  ingredients: IngredientDTO[]
}