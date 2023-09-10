import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenValidationService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }

  redirectToMenuManagement() {
    this.router.navigate(['/menu-management'])
  }

  redirectToOrderManagement() {
    this.router.navigate(['/order-management'])
  }
}
