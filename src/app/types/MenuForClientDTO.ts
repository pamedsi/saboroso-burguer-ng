import {BurgerDTO} from "./MenuItemDTO/BurgerDTO";
import { PortionDTO } from "./MenuItemDTO/PortionDTO";
import {ComboDTO} from "./MenuItemDTO/ComboDTO";
import {DrinkDTO} from "./MenuItemDTO/DrinkDTO";
import {MenuItemDTO} from "./MenuItemDTO/MenuItemDTO";

export interface MenuForClientDTO {
  burgers: {[category: string]: BurgerDTO[]}
  portions: PortionDTO[]
  combos: ComboDTO[]
  drinks: DrinkDTO[]
  addOns: MenuItemDTO[]
}
