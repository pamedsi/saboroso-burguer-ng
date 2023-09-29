import {BurgerDTO} from "./MenuItemDTO/BurgerDTO";
import { PortionDTO } from "./MenuItemDTO/PortionDTO";
import {ComboDTO} from "./MenuItemDTO/ComboDTO";
import {DrinkDTO} from "./MenuItemDTO/DrinkDTO";
import {MenuItemDTO} from "./MenuItemDTO/MenuItemDTO";
import {BreadDTO} from "./MenuItemDTO/BreadDTO"

export interface MenuForClientDTO {
  burgers: {[category: string]: BurgerDTO[]}
  portions: PortionDTO[]
  drinks: DrinkDTO[]
  breads: BreadDTO[]
  combos: ComboDTO[]
  addOns: MenuItemDTO[]
}
