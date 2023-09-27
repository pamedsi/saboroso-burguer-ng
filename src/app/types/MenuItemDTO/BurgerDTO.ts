import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";
import {MenuItemDTO} from "./MenuItemDTO";

export interface BurgerDTO extends MenuItemDTO {
  category: CategoryDTO
  pic: string
  ingredients: IngredientDTO[]
}
