import {MenuItem} from "./MenuItem";
import {MenuItemDTO} from "../../types/MenuItemDTO/MenuItemDTO";

export class AddOnForMenu extends MenuItem {
    constructor(addOnDTO: MenuItemDTO) {
        super(addOnDTO);
    }
}
