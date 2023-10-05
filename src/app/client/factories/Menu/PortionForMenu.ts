import {MenuItem} from "./MenuItem";
import {PortionDTO} from "../../../shared/models/MenuItemDTO/PortionDTO";
import {AddOnForMenu} from "./AddOnForMenu";

export class PortionForMenu extends MenuItem {
    private readonly pic: string | null
    private readonly description: string

    private addOns!: AddOnForMenu[]

    addOnsEditing: any
    numberOfAddOns!: number | string

    constructor(portionDTO: PortionDTO) {
        super(portionDTO);
        this.pic = portionDTO.pic
        this.description = portionDTO.description

      this.addOnsEditing = []
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

    // Components methods
    toDTO() {
      return {
        identifier: this.identifier,
        title: this.title,
        price: this.price,
        description: this.description,
        pic: this.pic
      } as PortionDTO
  }
}
