import { Component } from '@angular/core';
import {IngredientService} from "../../../services/IngredientService";
import {Ingredient} from "../../../models/Ingredient";

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent {
  ingredients!: Ingredient[]
  selectedIngredients: Ingredient[] = [];
  selectedOption: any;
  constructor(private ingredientService: IngredientService) {}

  ngOnInit(){
    this.ingredientService.getIngredients().subscribe
    (ingredients => this.ingredients = ingredients)
  }

  addIngredient($event: any) {
    this.selectedIngredients.push($event)
  }
}
