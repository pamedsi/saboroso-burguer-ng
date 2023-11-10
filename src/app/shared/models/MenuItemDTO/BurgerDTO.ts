import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";
import {BaseMenuItemDTO} from "../BaseMenuItemDTO";

export interface BurgerDTO extends BaseMenuItemDTO {
  categoryDTO: CategoryDTO
  ingredients: IngredientDTO[]
}
