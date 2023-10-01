import {MenuItem} from "./MenuItem";
import {BaseMenuItemDTO} from "../../../shared/models/BaseMenuItemDTO";

export class AddOnForMenu extends MenuItem {
    constructor(addOnDTO: BaseMenuItemDTO) {
        super(addOnDTO);
    }
}
