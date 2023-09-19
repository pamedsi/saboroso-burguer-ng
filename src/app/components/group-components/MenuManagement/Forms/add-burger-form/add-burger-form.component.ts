import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../../../../services/IngredientService";
import {Ingredient} from "../../../../../models/Ingredient";
import {CategoryService} from "../../../../../services/CategoryService";
import {BurgerCategory} from "../../../../../models/BurgerCategory";
import {InputBurgerDTO} from "../../../../../types/BurgerDTO";
import {BurgerService} from "../../../../../services/BurgerService";

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent implements OnInit{
  allIngredients!: Ingredient[]
  allCategories!: BurgerCategory[]

  title!: string
  category!: BurgerCategory
  price!: number
  pic!: string
  selectedIngredients: Ingredient[] = [];
  inStock: boolean

  constructor(
    private ingredientService: IngredientService,
    private categoryService: CategoryService,
    private burgerService: BurgerService
  ) {
    this.inStock = true
  }

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
    if (index === -1) return
    const alreadyInList = this.selectedIngredients.some(ingredient =>
      ingredient.getIdentifier() === this.allIngredients[index].getIdentifier()
    )
    if (!alreadyInList) this.selectedIngredients.push(this.allIngredients[index])
  }
  removeIngredient(ingredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(
      i => i.getIdentifier() !== ingredient.getIdentifier())
  }
  setCategory(category: any){
    const index = category.options.selectedIndex - 1
    if (index === -1 ) return
    this.category = this.allCategories[index]
  }
  setInStock(target: any){
    this.inStock = target.value === 'Sim'
  }
  addBurger(){
    if (!this.title) return
    if (!this.category) return
    if (!this.price) return
    if (!this.selectedIngredients.length) return

    const burgerDTO = {
      title: this.title,
      categoryIdentifier: this.category.getIdentifier(),
      price: this.price,
      pic: this.pic ? this.pic : null,
      inStock: this.inStock,
      ingredients: this.selectedIngredients.map(ingredient => ingredient.toDTO())
    } as InputBurgerDTO

    this.burgerService.addNewBurger(burgerDTO)

    this.title = ''
    this.price = 0
    this.selectedIngredients = []
  }
}
