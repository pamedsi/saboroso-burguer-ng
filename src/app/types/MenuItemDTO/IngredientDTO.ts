import {MenuItemDTO} from "./MenuItemDTO";

export interface IngredientDTO extends MenuItemDTO{
  grams: number | null
}
