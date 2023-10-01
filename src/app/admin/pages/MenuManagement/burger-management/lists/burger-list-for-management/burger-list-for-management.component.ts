import {Component, OnInit} from '@angular/core';
import {BurgerForManagement} from 'src/app/admin/factories/MenuManagement/BurgerForManagement';
import { CategoryForManagement } from 'src/app/admin/factories/MenuManagement/CategoryForManagement';
import { IngredientForManagement } from 'src/app/admin/factories/MenuManagement/IngredientForManagement';
import {BurgerService} from 'src/app/admin/services/BurgerService/BurgerService';
import { CategoryService } from 'src/app/admin/services/BurgerService/CategoryService';
import { IngredientService } from 'src/app/admin/services/BurgerService/IngredientService';


@Component({
  selector: 'app-burger-list-for-management',
  templateUrl: './burger-list-for-management.component.html',
  styleUrls: ['./burger-list-for-management.component.css']
})
export class BurgerListForManagementComponent implements OnInit {
  burgerList!: BurgerForManagement[]
  allCategories!: CategoryForManagement[]
  allIngredients!: IngredientForManagement[]

  constructor(
    private burgerService: BurgerService,
    private categoryService: CategoryService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(){
    this.burgerService.currentBurgersForManagement.subscribe(
      burgers => this.burgerList = burgers
    )
    this.burgerService.getBurgers()

    this.categoryService.getCategoriesForManagement().subscribe(
      categories => this.allCategories = categories
    )
    this.ingredientService.getIngredients().subscribe(
      ingredients => this.allIngredients = ingredients
    )
  }

  removeIngredient(ingredientIdentifier: string, burger: BurgerForManagement) {
      burger.ingredientsEditing = burger.getIngredients().filter(ingredientToRemove => {
        return ingredientToRemove.getIdentifier() !== ingredientIdentifier
    })
  }
  addIngredient(ingredientIndex: any, burger: BurgerForManagement) {
    const index = ingredientIndex.options.selectedIndex - 1
    if (index === -1) return
    const alreadyInList = burger.ingredientsEditing.some(ingredient =>
      ingredient.getIdentifier() === this.allIngredients[index].getIdentifier()
    )
    if (alreadyInList) return
    burger.ingredientsEditing.push((this.allIngredients[index]))
  }
  editBurger(burger: BurgerForManagement): boolean{
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
  cancelEditing(burger: BurgerForManagement) {
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
