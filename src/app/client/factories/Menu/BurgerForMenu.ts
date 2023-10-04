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

  private bread: BreadDTO | undefined
  private combo: ComboForMenu | undefined
  private addOns!: AddOnForMenu[]

  // Component Props

  breadEditing: BreadDTO | undefined

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

  // Order details
  getBread(){
    return this.bread
  }
  setBread(bread: BreadDTO | undefined){
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
  setCombo(combo: ComboForMenu | undefined){
    this.combo = combo
  }

  // Component methods:
  ingredientsToString(): string {
    if (this.ingredients.length === 0) return "Sem ingredientes"
    const stringToBeReturned: string[] =
      this.ingredients.map(ingredient =>
        ingredient.grams ? `${ingredient.grams} gramas de ${ingredient.title}` : ingredient.title
      );
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }


}
