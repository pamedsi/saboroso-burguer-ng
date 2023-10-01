import {BurgerForMenu} from "../factories/Menu/BurgerForMenu";
import {PortionForMenu} from "../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../factories/Menu/DrinkForMenu";

export interface ClientOrderDTO {
  burgers: BurgerForMenu[]
  portions: PortionForMenu[]
  drinks: DrinkForMenu[]
}
