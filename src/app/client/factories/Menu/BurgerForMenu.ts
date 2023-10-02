import {MenuItem} from "./MenuItem";
import {CategoryDTO} from "../../../shared/models/MenuItemDTO/CategoryDTO";
import {IngredientDTO} from "../../../shared/models/MenuItemDTO/IngredientDTO";
import {BurgerDTO} from "../../../shared/models/MenuItemDTO/BurgerDTO";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";
import {ComboForMenu} from "./ComboForMenu";
import {AddOnForMenu} from "./AddOnForMenu";

export class BurgerForMenu extends MenuItem {
  private readonly category: CategoryDTO
  private readonly pic: string | null
  private readonly ingredients: IngredientDTO[]

  private bread!: BreadDTO
  private combo!: ComboForMenu
  private addOns!: AddOnForMenu[]

  constructor(burgerDTO: BurgerDTO) {
    super(burgerDTO);
    this.category = burgerDTO.category
    this.pic = burgerDTO.pic
    this.ingredients = burgerDTO.ingredients
  }
  getCategory() {
    return this.category;
  }
  getPic() {
    return this.pic;
  }
  ingredientsToString(): string {
        if (this.ingredients.length === 0) return "Sem ingredientes"
        const stringToBeReturned: string[] =
            this.ingredients.map(ingredient =>
                    ingredient.grams ? `${ingredient.grams} gramas de ${ingredient.title}` : ingredient.title
                );
        const lastIngredient = stringToBeReturned.pop();
        return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }

  // Order details
  getBread(){
    return this.bread
  }
  setBread(bread: BreadDTO){
    this.bread = bread
  }
  getAddOns(){
    return this.addOns
  }
  setAddOns(addOns: AddOnForMenu[]){
    this.addOns = addOns
  }
  getCombo(){
    return this.combo
  }
  setCombo(combo: ComboForMenu){
    this.combo = combo
  }
}
