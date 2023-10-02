import {MenuItem} from "./MenuItem";
import {PortionDTO} from "../../../shared/models/MenuItemDTO/PortionDTO";
import {AddOnForMenu} from "./AddOnForMenu";

export class PortionForMenu extends MenuItem {
    private readonly pic: string | null
    private readonly description: string

    private addOns!: AddOnForMenu[]

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

    // Portion details
    getAddOns(){
      return this.addOns
    }
    setAddOns(addOns: AddOnForMenu[]){
      this.addOns = addOns
    }
}
