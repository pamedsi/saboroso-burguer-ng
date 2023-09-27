import {MenuItem} from "./MenuItem";
import {CategoryDTO} from "../../types/MenuItemDTO/CategoryDTO";
import {IngredientDTO} from "../../types/MenuItemDTO/IngredientDTO";
import {BurgerDTO} from "../../types/MenuItemDTO/BurgerDTO";

export class BurgerForMenu extends MenuItem {
  private readonly category: CategoryDTO
  private readonly pic: string | null
  private readonly ingredients: IngredientDTO[]

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
}
