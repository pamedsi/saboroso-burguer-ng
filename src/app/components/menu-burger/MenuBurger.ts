interface ingredientForMenuBurger {
  title: string,
  grams: number | null
}
export interface menuBurgerDTO {
  identifier: string,
  category: "SMASH_ARTESANAL" | "SMASH_DUPLO",
  title: string,
  price: number,
  pic: string | null,
  ingredients: ingredientForMenuBurger[]
}

export class MenuBurger {
  private readonly identifier: string
  private readonly category: "SMASH_ARTESANAL" | "SMASH_DUPLO"
  private readonly title: string
  private readonly price: number
  private readonly pic: string | null
  private readonly ingredientsList: ingredientForMenuBurger[]

  constructor(burgerFromRequest: menuBurgerDTO) {
    this.identifier = burgerFromRequest.identifier
    this.category = burgerFromRequest.category
    this.title = burgerFromRequest.title
    this.price = burgerFromRequest.price
    this.pic = burgerFromRequest.pic
    this.ingredientsList = burgerFromRequest.ingredients
  }
  getIdentifier(): string {
    return this.identifier;
  }

  getCategory(): "SMASH_ARTESANAL" | "SMASH_DUPLO" {
    return this.category;
  }

  getTitle(): string {
    return this.title;
  }

  getPrice(): number {
    return this.price;
  }

  getPic(): string | null {
    return this.pic;
  }
  getIngredients(){
    return this.ingredientsList
  }
  ingredientsToString(): string {
    const stringToBeReturned: string[] = this.ingredientsList.map(ingredient => ingredient.grams ? `${ingredient.grams} gramas de ${ingredient.title}` : ingredient.title);
    const lastIngredient = stringToBeReturned.pop();
    return `${stringToBeReturned.join(', ')} e ${lastIngredient}.`;
  }
}
