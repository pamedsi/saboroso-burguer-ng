import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";

export interface BurgerDTO {
  identifier: string
  category: CategoryDTO
  title: string
  price: number | string
  pic: string | null
  inStock: boolean
  ingredients: IngredientDTO[]
}

export interface InputBurgerDTO {
  title: string
  categoryIdentifier: string
  price: number
  pic: string | null
  inStock: boolean
  ingredients: IngredientDTO[]
}
