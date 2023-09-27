import {MenuItem} from "./MenuItem";
import {DrinkDTO} from "../../types/MenuItemDTO/DrinkDTO";

export class DrinkForMenu extends MenuItem {
    private readonly mL: number;

    constructor(drinkDTO: DrinkDTO) {
        super(drinkDTO);
        this.mL = drinkDTO.ml;
    }

    getMl(){
        return this.mL;
    }
}
