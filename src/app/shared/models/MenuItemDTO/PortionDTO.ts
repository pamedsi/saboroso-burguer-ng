import {BaseMenuItemDTO} from "../BaseMenuItemDTO";

export interface PortionDTO extends BaseMenuItemDTO{
  description: string
  pic: string | null;
}
