import {BurgerForMenu} from "../factories/Menu/BurgerForMenu";
import {PortionForMenu} from "../factories/Menu/PortionForMenu";
import {DrinkForMenu} from "../factories/Menu/DrinkForMenu";
import {IPaymentMethod} from "./IPaymentMethod";

export interface ClientOrder {
  burgers: BurgerForMenu[]
  portions: PortionForMenu[]
  drinks: DrinkForMenu[]
  paymentMethod: IPaymentMethod
  howClientWillPay?: string
}
