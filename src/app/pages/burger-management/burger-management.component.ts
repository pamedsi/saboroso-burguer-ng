import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  CategoryListForManagementComponent
} from "../../components/group-components/BurgersManagement/Lists/category-list-for-management/category-list-for-management.component";
import {CategoryService} from "../../services/CategoryService";
import {Observable} from "rxjs";
import {BurgerCategory} from "../../models/BurgerCategory";

@Component({
  selector: 'app-burger-management',
  templateUrl: './burger-management.component.html',
  styleUrls: ['./burger-management.component.css']
})
export class BurgerManagementComponent implements AfterViewInit {

  constructor(private categoryService: CategoryService){}

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
}
