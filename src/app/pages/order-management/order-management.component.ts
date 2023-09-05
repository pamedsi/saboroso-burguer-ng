import { Component } from '@angular/core';
import { TokenValidationService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  constructor(
    private tokenValidation: TokenValidationService
    ){}

  ngOnInit(): void {
    this.tokenValidation.forRouteAccess('/order-management')
  }
}
