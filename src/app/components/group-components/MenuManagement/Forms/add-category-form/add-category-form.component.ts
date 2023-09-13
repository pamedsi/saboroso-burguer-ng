import {Component, EventEmitter, Output} from '@angular/core';
import {CategoryService} from "../../../../../services/CategoryService";
import {CategoryDTO} from "../../../../../types/CategoryDTO";

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent {
  @Output() newCategoryAdded
  categoryName!: string

  constructor(private categoryService: CategoryService) {
    this.newCategoryAdded = new EventEmitter()
  }
  addCategory() {
    if (!this.categoryName) return
    const title = this.categoryName.toUpperCase()
    this.categoryService.createCategory({title} as CategoryDTO)
    this.categoryService.getCategoriesForManagement().pipe()
    this.categoryName = ''
    this.newCategoryAdded.emit()
  }
}
