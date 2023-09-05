import { Component } from '@angular/core';
import { TokenValidatorService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  constructor(
    private tokenService: TokenValidatorService
    ){}

  ngOnInit(): void {
    this.tokenService.validateToken('/order-management')
  }
}
