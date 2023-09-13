import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../../services/CategoryService";
import {BurgerCategory} from "../../../../../models/BurgerCategory";
@Component({
  selector: 'app-category-list-for-management',
  templateUrl: './category-list-for-management.component.html',
  styleUrls: ['./category-list-for-management.component.css']
})
export class CategoryListForManagementComponent implements OnInit{
  allCategories!: BurgerCategory[]
  initialCategoryName!: string

  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    this.categoryService.getCategoriesForManagement().subscribe(categories => {
      this.allCategories = categories.map(category => new BurgerCategory(category))
    })
  }
  editCategory(identifier: string) {
    const category = this.getCategory(identifier)
    if (!category) return;

    category.setTitle(category.editing)
    category.editing = category.editing.toUpperCase()
    category.setEditable(false)
    this.categoryService.updateCategory(category.toDTO())
  }
  deleteCategory(identifier: string) {
      const category = this.getCategory(identifier)
      if (!category) return

      category.setDeleted(true)
      this.allCategories = this.allCategories.filter(category => category.getIdentifier() !== identifier)
      this.categoryService.removeCategory(identifier)
  }
  private getCategory(identifier: string) {
      return this.allCategories.find(
          category => category.getIdentifier() === identifier
      )
  }
  cancelEditing(identifier: string) {
    const category = this.getCategory(identifier)
    if (!category) return
    category.editing = this.initialCategoryName
    category.setEditable(false)
  }
}
