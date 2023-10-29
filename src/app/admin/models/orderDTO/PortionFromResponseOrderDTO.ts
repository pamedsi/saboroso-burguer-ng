import {AddOnFromResponseOrderDTO} from "./AddOnFromResponseOrderDTO";

export interface PortionFromResponseOrderDTO {
  title: string
  pic: string
  addOns: AddOnFromResponseOrderDTO[]
  obs: string
  price: number
}
