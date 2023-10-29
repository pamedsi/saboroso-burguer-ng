import {AddOnFromResponseOrderDTO} from "./AddOnFromResponseOrderDTO";
import {BreadFromResponseOrderDTO} from "./BreadFromResponseOrderDTO";
import {ComboFromResponseOrderDTO} from "./ComboFromResponseOrderDTO";

export interface BurgerFromResponseOrderDTO {
  title: string
  addOns: AddOnFromResponseOrderDTO[]
  bread: BreadFromResponseOrderDTO
  combo: ComboFromResponseOrderDTO
  obs: string
  burgerSoldBy: number
}
