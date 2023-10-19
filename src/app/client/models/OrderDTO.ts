import {IPaymentMethod} from "./IPaymentMethod";
import {PurchasedPortionDTO} from "./PurchasedPortionDTO";
import {PurchasedBurgerDTO} from "./PurchasedBurgerDTO";

export interface DrinkAndQuantity {
  drinkIdentifier: string
  quantity: number
}

export interface OrderDTO {
  orderCode: string
  clientName: string
  clientPhoneNumber: string
  addressToDeliver: string

  burgers: PurchasedBurgerDTO[]
  portions: PurchasedPortionDTO[]
  drinks: DrinkAndQuantity[]

  paymentMethod: IPaymentMethod
  howClientWillPay: string | null
  totalToPay: number
}
