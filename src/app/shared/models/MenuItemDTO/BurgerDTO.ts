import { IngredientDTO } from "./IngredientDTO";
import {CategoryDTO} from "./CategoryDTO";
import {BaseMenuItemDTO} from "../BaseMenuItemDTO";
import {BreadDTO} from "./BreadDTO";
import {ComboDTO} from "./ComboDTO";

export interface BurgerDTO extends BaseMenuItemDTO {
  category: CategoryDTO
  pic: string
  ingredients: IngredientDTO[]
  bread: BreadDTO | undefined
  combo: ComboDTO | null
}
