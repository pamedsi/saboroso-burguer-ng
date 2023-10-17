import {PurchasedPortionDTO} from "./PurchasedPortionDTO";

export interface PurchasedBurgerDTO extends PurchasedPortionDTO{
  breadIdentifier: string
  comboIdentifier: string | null
}
