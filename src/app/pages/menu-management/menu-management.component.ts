import { Component } from '@angular/core';
import { TokenValidatorService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent {
  constructor(
    private tokenService: TokenValidatorService
    ){}

  ngOnInit(): void {
    this.tokenService.validateTokenForRouteAccess('/menu-management')
  }
}
