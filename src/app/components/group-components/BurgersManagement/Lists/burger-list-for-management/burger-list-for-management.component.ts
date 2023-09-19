import {Component, OnInit} from '@angular/core';
import {Burger} from 'src/app/models/Burger';
import {BurgerService} from 'src/app/services/BurgerService';
import {CategoryService} from "../../../../../services/CategoryService";
import {IngredientService} from "../../../../../services/IngredientService";
import {BurgerCategory} from "../../../../../models/BurgerCategory";
import {Ingredient} from "../../../../../models/Ingredient";

@Component({
  selector: 'app-burger-list-for-management',
  templateUrl: './burger-list-for-management.component.html',
  styleUrls: ['./burger-list-for-management.component.css']
})
export class BurgerListForManagementComponent implements OnInit {
  burgerList!: Burger[]
  allCategories!: BurgerCategory[]
  allIngredients!: Ingredient[]

  constructor(
    private burgerService: BurgerService,
    private categoryService: CategoryService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(){
    this.burgerService.currentBurgersForManagement.subscribe(
      burgers => this.burgerList = burgers
    )
    this.burgerService.getBurgersForMenuManagement()

    this.categoryService.getCategoriesForManagement().subscribe(
      categories => this.allCategories = categories
    )
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.allIngredients = ingredients
    )
  }

  removeIngredient(ingredientIdentifier: string, burger: Burger) {
      burger.ingredientsEditing = burger.getIngredients().filter(ingredientToRemove => {
        return ingredientToRemove.getIdentifier() !== ingredientIdentifier
    })
  }
  addIngredient(ingredientIndex: any, burger: Burger) {
    const index = ingredientIndex.options.selectedIndex - 1
    if (index === -1) return
    const alreadyInList = burger.ingredientsEditing.some(ingredient =>
      ingredient.getIdentifier() === this.allIngredients[index].getIdentifier()
    )
    if (alreadyInList) return
    burger.ingredientsEditing.push((this.allIngredients[index]))
  }
  editBurger(burger: Burger): boolean{
    let changes = 0
    if (burger.getTitle() !== burger.titleEditing) {
      burger.setTitle(burger.titleEditing)
      changes++
    }
    if (burger.categoryEditing !== burger.getCategory()) {
      burger.setCategory(burger.categoryEditing)
        changes++
    }
    if (burger.getPrice() !== burger.priceEditing){
      burger.setPrice(burger.priceEditing)
      changes++
    }
    if (burger.getPic() !== burger.picEditing) {
      burger.setPic(burger.picEditing)
      changes++
    }
    if (burger.getIngredients().length !== burger.ingredientsEditing.length) {
      burger.setIngredients(burger.ingredientsEditing)
      changes++
    }
    else {
      let similarities = 0
      burger.getIngredients().forEach(ingredientOnBurger => {
        const alreadyOnIt = burger.ingredientsEditing.some(ingredientComing =>
          ingredientComing.getIdentifier() === ingredientOnBurger.getIdentifier()
        )
        if (alreadyOnIt) similarities++
      })
      if (similarities !== burger.getIngredients().length) {
        burger.setIngredients(burger.ingredientsEditing)
        changes++
      }
    }
    if (burger.getInStock() !== burger.inStockEditing) {
      burger.setInStock(burger.inStockEditing)
      changes++
    }

    if (changes === 0) {
      console.info({message: "Nenhuma mudança feita!"})
      burger.setEditable(false)
      return false
    }
    this.burgerService.updateBurger(burger.toDTO())
    burger.setEditable(false)
    return true
  }
  cancelEditing(burger: Burger) {
        burger.titleEditing = burger.getTitle()
        burger.categoryEditing = burger.getCategory()
        burger.priceEditing = burger.getPrice()
        burger.picEditing = String(burger.getPic())
        burger.ingredientsEditing = burger.getIngredients()
        burger.inStockEditing = burger.getInStock()
        burger.setEditable(false)
  }

  deleteBurger(identifier: string) {
    this.burgerList = this.burgerList.filter(burger => burger.getIdentifier() !== identifier)
    this.burgerService.removeBurger(identifier)
  }
}
