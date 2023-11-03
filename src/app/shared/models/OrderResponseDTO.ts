import {IOrderStatus} from "./IOrderStatus";
import {IPaymentMethod} from "./IPaymentMethod";
import {BurgerFromResponseOrderDTO} from "../../admin/models/orderDTO/BurgerFromResponseOrderDTO";
import {PortionFromResponseOrderDTO} from "../../admin/models/orderDTO/PortionFromResponseOrderDTO";
import {DrinkAndQuantityFromResponseOrderDTO} from "../../admin/models/orderDTO/DrinkAndQuantityFromResponseOrderDTO";

export interface OrderResponseDTO {
  identifier: string
  timeOfPurchase: Date
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
