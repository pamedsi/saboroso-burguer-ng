import {IPaymentMethod} from "./IPaymentMethod";
import {PurchasedPortionDTO} from "./PurchasedPortionDTO";
import {PurchasedBurgerDTO} from "./PurchasedBurgerDTO";

export interface OrderDTO {
  clientName: string
  clientPhoneNumber: string
  addressToDeliver: string

  burgers: PurchasedBurgerDTO[]
  portions: PurchasedPortionDTO[]
  drinksIdentifiers: string[]

  paymentMethod: IPaymentMethod
  howClientWillPay: string | null
  totalToPay: number
}
