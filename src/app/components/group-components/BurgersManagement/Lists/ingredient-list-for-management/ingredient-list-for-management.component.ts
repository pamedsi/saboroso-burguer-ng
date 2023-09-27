import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../../../services/IngredientService";
import {IngredientForManagement} from "../../../../../models/Management/IngredientForManagement";

@Component({
  selector: 'app-ingredient-list-for-management',
  templateUrl: './ingredient-list-for-management.component.html',
  styleUrls: ['./ingredient-list-for-management.component.css']
})
export class IngredientListForManagementComponent implements OnInit{
  allIngredients!: IngredientForManagement[]
  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.allIngredients = ingredients
    })
  }
  deleteIngredient(identifier: string) {
    this.allIngredients = this.allIngredients.filter(ingredient => ingredient.getIdentifier() !== identifier)
    this.ingredientService.removeIngredient(identifier)
  }
  cancelEditing(identifier: string) {
    const ingredient = this.allIngredients.find(ingredient => ingredient.getIdentifier() === identifier)
    if (!ingredient) return
    ingredient.titleEditing = ingredient.getTitle()
    if (ingredient.getGrams()) ingredient.gramsEditing = ingredient.getGrams()
    ingredient.setEditable(false)
  }
  editIngredient(identifier: string) {
    const ingredient = this.allIngredients.find(ingredient => ingredient.getIdentifier() === identifier)
    if (!ingredient) return
    if(!this.anyChanges(ingredient)) {
      ingredient.setEditable(false)
      return
    }

    ingredient.setTitle(ingredient.titleEditing)
    if (!ingredient.gramsEditing) ingredient.setGrams(null)
    else ingredient.setGrams(Number(ingredient.gramsEditing))
    ingredient.setInStock()
    ingredient.setEditable(false)

    this.ingredientService.updateIngredient(ingredient.toDTO())
  }
  anyChanges(ingredient: IngredientForManagement): boolean {
    if (ingredient.getTitle() !== ingredient.titleEditing || ingredient.gramsEditing !== ingredient.getGrams()) return true
    if (ingredient.inStockEditing && ingredient.getInStock()) return true
    const clicked = typeof ingredient.inStockEditing  === 'boolean'
    return clicked && (ingredient.inStockEditing !== ingredient.getInStock())
  }
}
