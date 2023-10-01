import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";
import {BaseMenuItemDTO} from "../BaseMenuItemDTO";

export interface BurgerDTO extends BaseMenuItemDTO {
  category: CategoryDTO
  pic: string
  ingredients: IngredientDTO[]
}
