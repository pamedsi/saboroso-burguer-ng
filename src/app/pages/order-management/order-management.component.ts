import { Component } from '@angular/core';
import { TokenValidationService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  constructor(){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
}
