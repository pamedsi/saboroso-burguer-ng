import {MenuItem} from "./MenuItem";
import {PortionDTO} from "../../types/MenuItemDTO/PortionDTO";

export class PortionForMenu extends MenuItem {
    private readonly pic: string | null
    private readonly description: string

    constructor(portionDTO: PortionDTO) {
        super(portionDTO);
        this.pic = portionDTO.pic
        this.description = portionDTO.description
    }

    getPic(){
        return this.pic
    }
    getDescription(){
        return this.description
    }
}
