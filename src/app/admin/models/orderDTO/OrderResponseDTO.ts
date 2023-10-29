import {IOrderStatus} from "../../../client/models/IOrderStatus";
import {IPaymentMethod} from "../../../client/models/IPaymentMethod";
import {BurgerFromResponseOrderDTO} from "./BurgerFromResponseOrderDTO";
import {PortionFromResponseOrderDTO} from "./PortionFromResponseOrderDTO";
import {DrinkAndQuantityFromResponseOrderDTO} from "./DrinkAndQuantityFromResponseOrderDTO";

export interface OrderResponseDTO {
  orderCode: string
  status: IOrderStatus
  clientName: string
  clientPhoneNumber: string
  address: string
  burgers: BurgerFromResponseOrderDTO[]
  portions: PortionFromResponseOrderDTO[]
  drinks: DrinkAndQuantityFromResponseOrderDTO[]
  paymentMethod: IPaymentMethod
  howClientPaid: string
  totalPaid: number
}
