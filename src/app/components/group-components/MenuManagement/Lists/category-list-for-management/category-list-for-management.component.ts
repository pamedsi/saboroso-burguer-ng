import {Component, OnInit} from '@angular/core';
import {CategoryDTO} from "../../../../../types/CategoryDTO";
import {CategoryService} from "../../../../../services/CategoryService";

@Component({
  selector: 'app-category-list-for-management',
  templateUrl: './category-list-for-management.component.html',
  styleUrls: ['./category-list-for-management.component.css']
})
export class CategoryListForManagementComponent implements OnInit{
  allCategories!: CategoryDTO[]

  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    this.categoryService.getCategoriesForManagement().subscribe(categories => {
      this.allCategories = categories
      })
  }

  editCategory() {
    console.log('oi')
  }

  deleteCategory() {
    console.log('tchau')
  }
}
