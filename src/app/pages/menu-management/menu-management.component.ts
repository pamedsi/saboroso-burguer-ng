import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  CategoryListForManagementComponent
} from "../../components/group-components/MenuManagement/Lists/category-list-for-management/category-list-for-management.component";
import {CategoryService} from "../../services/CategoryService";
import {Observable} from "rxjs";
import {BurgerCategory} from "../../models/BurgerCategory";

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements AfterViewInit {

  constructor(private categoryService: CategoryService){}

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
  async refreshList() {
    return await this.categoryService.getCategoriesForManagement().forEach(categories => {
      categories.map(category => new BurgerCategory(category));
    });
  }

  handleNewCategory() {

  }
}
