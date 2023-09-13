import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../../../services/IngredientService";
import {Ingredient} from "../../../../../models/Ingredient";
import {IngredientDTO} from "../../../../../types/IngredientDTO";
import {CategoryService} from "../../../../../services/CategoryService";
import {CategoryDTO} from "../../../../../types/CategoryDTO";

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent implements OnInit{
  private readonly titleOfOptions: Ingredient
  allIngredients!: Ingredient[]
  allCategories!: CategoryDTO[]
  selectedIngredients: Ingredient[] = [];

  title!: string
  category!: CategoryDTO
  price!: number
  pic!: string

  constructor(
    private ingredientService: IngredientService,
    private categoryService: CategoryService
  ) {
    this.titleOfOptions = new Ingredient({title: 'Selecione'} as IngredientDTO)
  }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe
    (ingredients => {
      this.allIngredients = ingredients
      this.allIngredients.unshift(this.titleOfOptions)
    })

    this.categoryService.getCategoriesForManagement().subscribe(
      categories => {
        this.allCategories = categories
      }
    )
  }
  addIngredient(ingredientIndex: any) {
    const index = ingredientIndex.options.selectedIndex
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
    const index = category.options.selectedIndex
    if (index) this.category = this.allCategories[index]
  }
}
