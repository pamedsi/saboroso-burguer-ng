import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }

  redirectToBurgersManagement() {
    this.router.navigate(['/burgers-management'])
  }
  redirectToOrderManagement() {
    this.router.navigate(['/orders-management'])
  }
  redirectToPortionsManagement() {
    this.router.navigate(['/portions-management'])
  }
  redirectToDrinksManagement() {
    this.router.navigate(['/drinks-management'])
  }
  redirectToAddOnsManagement() {
    this.router.navigate(['/portion-management'])
  }
  redirectToOrderHistory(){
    this.router.navigate(['/order-history'])
  }
}