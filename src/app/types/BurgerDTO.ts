import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";

export interface BurgerDTO {
  identifier: string
  category: CategoryDTO
  title: string
  price: number
  pic: string | null
  ingredients: IngredientDTO[]
}
