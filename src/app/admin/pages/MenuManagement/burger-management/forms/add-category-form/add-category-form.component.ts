import {Component} from '@angular/core';
import {CategoryDTO} from "../../../../../../shared/models/MenuItemDTO/CategoryDTO";
import {CategoryService} from "../../../../../services/BurgerService/CategoryService";


@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent {
  categoryName!: string

  constructor(private categoryService: CategoryService) {
  }
  addCategory() {
    if (!this.categoryName) return
    const title = this.categoryName.toUpperCase()
    this.categoryService.createCategory({title} as CategoryDTO)
    this.categoryService.getCategoriesForManagement().pipe()
    this.categoryName = ''
  }
}
