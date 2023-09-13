import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../../../services/IngredientService";
import {Ingredient} from "../../../../../models/Ingredient";
import {CategoryService} from "../../../../../services/CategoryService";
import {BurgerCategory} from "../../../../../models/BurgerCategory";

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent implements OnInit{
  allIngredients!: Ingredient[]
  allCategories!: BurgerCategory[]
  selectedIngredients: Ingredient[] = [];

  title!: string
  category!: BurgerCategory
  price!: number
  pic!: string

  constructor(
    private ingredientService: IngredientService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe
    (ingredients => {
      this.allIngredients = ingredients
    })

    this.categoryService.getCategoriesForManagement().subscribe(
      categories => {
        this.allCategories = categories
      }
    )
  }
  addIngredient(ingredientIndex: any) {
    const index = ingredientIndex.options.selectedIndex - 1
    const alreadyInList = this.selectedIngredients.some(ingredient =>
      ingredient.getIdentifier() === this.allIngredients[index].getIdentifier()
    )
    if (index && !alreadyInList) this.selectedIngredients.push(this.allIngredients[index])
  }
  removeIngredient(ingredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(
      i => i.getIdentifier() !== ingredient.getIdentifier())
  }
  setCategory(category: any){
    const index = category.options.selectedIndex - 1
    if (index) this.category = this.allCategories[index]
  }
}
