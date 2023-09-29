import {BurgerForMenu} from "../../models/Menu/BurgerForMenu";
import {PortionForMenu} from "../../models/Menu/PortionForMenu";
import {DrinkForMenu} from "../../models/Menu/DrinkForMenu";

export interface CustomerOrder {
  burgers: BurgerForMenu[]
  portions: PortionForMenu[]
  drinks: DrinkForMenu[]
}
