import { Component } from '@angular/core';
import {IngredientService} from "../../../../../services/IngredientService";
import {IngredientDTO} from "../../../../../types/IngredientDTO";

@Component({
  selector: 'app-add-ingredient-form',
  templateUrl: './add-ingredient-form.component.html',
  styleUrls: ['./add-ingredient-form.component.css']
})
export class AddIngredientFormComponent {
  title!: string
  grams!: number | string

 constructor(private ingredientService: IngredientService) {}

  addIngredient(){
    let ingredient: IngredientDTO
    if(this.grams) ingredient = {title: this.title, grams: this.grams} as IngredientDTO
    else ingredient = {title: this.title} as IngredientDTO
    this.ingredientService.createIngredient(ingredient)
    this.grams = ''
    this.title = ''
  }
}
