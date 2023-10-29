import {IPaymentMethod} from "../../shared/models/IPaymentMethod";
import {PurchasedPortionDTO} from "./PurchasedPortionDTO";
import {PurchasedBurgerDTO} from "./PurchasedBurgerDTO";
import {IOrderStatus} from "../../shared/models/IOrderStatus";

export interface DrinkAndQuantity {
  drinkIdentifier: string
  quantity: number
}

export interface OrderDTO {
  orderCode: string
  status: IOrderStatus

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
