import {Component, OnInit} from '@angular/core';
import { CategoryForManagement } from 'src/app/admin/factories/MenuManagement/CategoryForManagement';
import { IngredientForManagement } from 'src/app/admin/factories/MenuManagement/IngredientForManagement';
import { BurgerService } from 'src/app/admin/services/BurgerService/BurgerService';
import { CategoryService } from 'src/app/admin/services/BurgerService/CategoryService';
import { IngredientService } from 'src/app/admin/services/BurgerService/IngredientService';
import { BurgerDTO } from 'src/app/shared/models/MenuItemDTO/BurgerDTO';

@Component({
  selector: 'app-add-burger-form',
  templateUrl: './add-burger-form.component.html',
  styleUrls: ['./add-burger-form.component.css']
})
export class AddBurgerFormComponent implements OnInit{
  allIngredients!: IngredientForManagement[]
  allCategories!: CategoryForManagement[]

  title!: string
  category!: CategoryForManagement
  price!: number
  pic!: string
  selectedIngredients: IngredientForManagement[] = [];
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
  removeIngredient(ingredient: IngredientForManagement) {
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
      category: this.category.toDTO(),
      price: this.price,
      pic: this.pic ? this.pic : null,
      inStock: this.inStock,
      ingredients: this.selectedIngredients.map(ingredient => ingredient.toDTO())
    } as BurgerDTO

    this.burgerService.addNewBurger(burgerDTO)

    this.title = ''
    this.price = 0
    this.selectedIngredients = []
  }
}
