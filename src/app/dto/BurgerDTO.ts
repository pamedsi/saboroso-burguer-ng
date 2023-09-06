import { IngredientDTO } from "./IngredientDTO";

export interface BurgerDTO {
  identifier: string
  category: "SMASH_ARTESANAL" | "SMASH_DUPLO" | "PREMIUM" | "PREMIUM_DUPLO"
  title: string
  price: number
  pic: string | null
  ingredients: IngredientDTO[]
}