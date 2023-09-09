import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/IngredientService";
import {Ingredient} from "../../../models/Ingredient";

@Component({
  selector: 'app-ingredient-list-for-management',
  templateUrl: './ingredient-list-for-management.component.html',
  styleUrls: ['./ingredient-list-for-management.component.css']
})
export class IngredientListForManagementComponent implements OnInit{
  allIngredients!: Ingredient[]
  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.allIngredients = ingredients
    })
  }
}
