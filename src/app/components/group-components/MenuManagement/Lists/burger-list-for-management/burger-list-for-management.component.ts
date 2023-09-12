import { Component } from '@angular/core';
import { Burger } from 'src/app/models/Burger';
import { BurgerService } from 'src/app/services/BurgerService';

@Component({
  selector: 'app-burger-list-for-management',
  templateUrl: './burger-list-for-management.component.html',
  styleUrls: ['./burger-list-for-management.component.css']
})
export class BurgerListForManagementComponent {

  burgerList!: Burger[]
  
  constructor(private burgerService: BurgerService) {}

  ngOnInit(){
    this.burgerService.getBurgersForMenuManagement().subscribe(burgers => this.burgerList = burgers)
  }
}