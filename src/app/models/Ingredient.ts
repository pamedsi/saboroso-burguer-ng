import {IngredientDTO} from "../types/IngredientDTO";

export class Ingredient {
  private readonly identifier: string
  private title: string
  private grams: number | null

  constructor(ingredientDTO: IngredientDTO) {
    this.identifier = ingredientDTO.identifier
    this.title = ingredientDTO.title
    this.grams = ingredientDTO.grams
  }

  ingredientToString(): string {
    return this.grams ? `${this.title} ${this.grams}` : this.title;
  }
  gramsToString(): string {
    return this.grams ? `${this.grams.toString()}` : "Sem gramas"
  }
  getIdentifier(){
    return this.identifier
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(value: string) {
    this.title = value;
  }
  getGrams(): number | null {
    return this.grams;
  }
  seGrams(value: number | null) {
    this.grams = value;
  }
}
