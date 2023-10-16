import {ComboDTO} from "../../shared/models/MenuItemDTO/ComboDTO";
import {BreadDTO} from "../../shared/models/MenuItemDTO/BreadDTO";
import {PurchasedPortionDTO} from "./PurchasedPortionDTO";

export interface PurchasedBurgerDTO extends PurchasedPortionDTO{
  bread: BreadDTO
  combo: ComboDTO | null
}
