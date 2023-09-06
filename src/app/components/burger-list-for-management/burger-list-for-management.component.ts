import { Component } from '@angular/core';
import { BurgerService } from 'src/app/services/BurgerService';

@Component({
  selector: 'app-burger-list-for-management',
  templateUrl: './burger-list-for-management.component.html',
  styleUrls: ['./burger-list-for-management.component.css']
})
export class BurgerListForManagementComponent {
  
  constructor(private burgerService: BurgerService) {}

  ngOnInit(){

  }
}
