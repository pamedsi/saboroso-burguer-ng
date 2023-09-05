import { Component, OnInit } from '@angular/core';
import { TokenValidationService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {
  burgers!: []
  portions!: []
  drinks!: []

  constructor(
    private tokenValidation: TokenValidationService
    ){}

  ngOnInit(): void {
    this.tokenValidation.forRouteAccess('/menu-management')
  }
}
