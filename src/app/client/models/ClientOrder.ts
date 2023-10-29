import {BurgerForMenu} from "../factories/Menu/BurgerForMenu";
import {PortionForMenu} from "../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../factories/Menu/DrinkForMenu";
import {IPaymentMethod} from "../../shared/models/IPaymentMethod";

export interface ClientOrder {
  clientName: string
  clientPhoneNumber: string
  addressToDeliver: string
  orderCode: string

  burgers: BurgerForMenu[]
  portions: PortionForMenu[]
  drinks: DrinkForMenu[]

  paymentMethod: IPaymentMethod
  howClientWillPay?: string
  totalToPay: number
}
