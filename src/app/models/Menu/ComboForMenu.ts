import {MenuItem} from "./MenuItem";
import {ComboDTO} from "../../types/MenuItemDTO/ComboDTO";

export class ComboForMenu extends MenuItem {
    private readonly description: string

    constructor(comboDTO: ComboDTO) {
        super(comboDTO);
        this.description = comboDTO.description
    }

    getDescription(){
        return this.description
    }
}
