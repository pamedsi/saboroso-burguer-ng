import { Component } from '@angular/core';
import { TokenValidationService } from 'src/app/admin/validation/TokenValidatorService';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  constructor(){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
}
