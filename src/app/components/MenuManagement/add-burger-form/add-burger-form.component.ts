import { Component } from '@angular/core';
import {IngredientService} from "../../../services/IngredientService";
import {Ingredient} from "../../../models/Ingredient";
import {IngredientDTO} from "../../../types/IngredientDTO";

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent {
  private readonly titleOfOptions: Ingredient
  ingredients!: Ingredient[]
  selectedIngredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {
    this.titleOfOptions = new Ingredient({title: 'Selecione'} as IngredientDTO)
  }
  ngOnInit() {
    this.ingredientService.getIngredients().subscribe
    (ingredients => {
      this.ingredients = ingredients
      this.ingredients.unshift(this.titleOfOptions)
    })
  }
  addIngredient(ingredientIndex: any) {
    const index = ingredientIndex.options.selectedIndex
    const alreadyInList = this.selectedIngredients.some(ingredient =>
      ingredient.getIdentifier() === this.ingredients[index].getIdentifier()
    )
    if (index !== 0 && !alreadyInList) this.selectedIngredients.push(this.ingredients[index])
  }
  removeIngredient(ingredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(
      i => i.getIdentifier() !== ingredient.getIdentifier())
  }
}
