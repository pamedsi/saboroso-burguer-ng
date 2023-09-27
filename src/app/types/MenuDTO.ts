import {BurgerDTO} from "./BurgerDTO";
import { PortionDTO } from "./PortionDTO";
import {ComboDTO} from "./ComboDTO";
import {DrinkDTO} from "./DrinkDTO";
import {AddOnDTO} from "./AddOnDTO";

export interface MenuDTO {
  burgers: {[category: string]: BurgerDTO[]}
  portions: PortionDTO[]
  combos: ComboDTO[]
  drinks: DrinkDTO[]
  addOns: AddOnDTO[]
}
