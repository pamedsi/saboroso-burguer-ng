import {MenuItemDTO} from "./MenuItemDTO";

export interface PortionDTO extends MenuItemDTO{
  description: string
  pic: string | null;
}
