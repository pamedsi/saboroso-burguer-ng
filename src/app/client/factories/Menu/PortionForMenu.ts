import {MenuItem} from "./MenuItem";
import {PortionDTO} from "../../../shared/models/MenuItemDTO/PortionDTO";
import {AddOnForMenu} from "./AddOnForMenu";
import {PurchasePrice} from "../../models/PurchasePrice";

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

        this.addOnsEditing = new Array(0)
        this.numberOfAddOns = ''
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
    getIndexesOfChosenAddOns(){
        const length = Number(this.numberOfAddOns)
        return Array.from({length}, (_, i) => i)
    }

    getPurchasePrice(): PurchasePrice{
        let addOnsValue= 0
        if (this.addOns) {
            this.addOns.forEach(addOn => addOnsValue += addOn.getPrice())
        }
        const totalValue = addOnsValue + this.price

        return {addOnsValue, totalValue} as PurchasePrice
    }
}
