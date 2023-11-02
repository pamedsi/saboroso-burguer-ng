import {MenuItem} from "./MenuItem";
import {CategoryDTO} from "../../../shared/models/MenuItemDTO/CategoryDTO";
import {IngredientDTO} from "../../../shared/models/MenuItemDTO/IngredientDTO";
import {BurgerDTO} from "../../../shared/models/MenuItemDTO/BurgerDTO";
import {BreadDTO} from "../../../shared/models/MenuItemDTO/BreadDTO";
import {ComboForMenu} from "./ComboForMenu";
import {AddOnForMenu} from "./AddOnForMenu";
import {PurchasePrice} from "../../models/PurchasePrice";

export class BurgerForMenu extends MenuItem {
  private readonly category: CategoryDTO
  private readonly pic: string | null
  private readonly ingredients: IngredientDTO[]

  private bread: BreadDTO | undefined
  private combo: ComboForMenu | null
  private addOns: AddOnForMenu[]

  // Component Props

  breadEditing: '' | BreadDTO
  comboEditing: '' | null | ComboForMenu
  addOnsEditing:  (AddOnForMenu | '')[]
  numberOfAddOns: number | ''

  constructor(burgerDTO: BurgerDTO) {
    super(burgerDTO);
    this.category = burgerDTO.categoryDTO
    this.pic = burgerDTO.pic
    this.ingredients = burgerDTO.ingredients
    this.combo = null

    this.addOnsEditing = new Array(0)
    this.numberOfAddOns = ''
    this.comboEditing = ''
    this.breadEditing = ''
    this.addOns = new Array(0)
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
  setCombo(combo: ComboForMenu | null){
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

  toDTO(): BurgerDTO{
    return {
      identifier: this.identifier,
      title: this.title,
      price: this.price,
      categoryDTO: this.category,
      pic: this.pic,
      ingredients: this.ingredients
    } as BurgerDTO
  }

  getIndexesOfChosenAddOns(){
    const length = Number(this.numberOfAddOns)
    return Array.from({length}, (_, i) => i)
  }

  getPurchasePrice(): PurchasePrice{
    let addOnsValue= 0
    if (this.addOns.length) {
      this.addOns.forEach(addOn => addOnsValue += addOn.getPrice())
    }

    let totalValue = addOnsValue + this.price
    if (this.combo) {
      totalValue += this.combo.getPrice()
      return {addOnsValue, comboValue: this.combo.getPrice(), totalValue} as PurchasePrice
    }

    return {addOnsValue, totalValue} as PurchasePrice
  }
}
