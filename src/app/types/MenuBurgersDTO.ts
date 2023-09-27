import {BurgerDTO} from "./BurgerDTO";

export interface MenuBurgersDTO {
  smash_artesanal: BurgerDTO[],
  smash_duplo: BurgerDTO[],
  premium: BurgerDTO[],
  premium_duplo: BurgerDTO[],
  kids: BurgerDTO[]
}
