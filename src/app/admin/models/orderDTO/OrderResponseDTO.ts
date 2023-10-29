import {IOrderStatus} from "../../../shared/models/IOrderStatus";
import {IPaymentMethod} from "../../../shared/models/IPaymentMethod";
import {BurgerFromResponseOrderDTO} from "./BurgerFromResponseOrderDTO";
import {PortionFromResponseOrderDTO} from "./PortionFromResponseOrderDTO";
import {DrinkAndQuantityFromResponseOrderDTO} from "./DrinkAndQuantityFromResponseOrderDTO";

export interface OrderResponseDTO {
  identifier: string
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
