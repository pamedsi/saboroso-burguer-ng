import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.admin.component.html',
  styleUrls: ['./home.admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
  // Menu BaseMenuItemDTO
  redirectToBurgersManagement() {
    this.router.navigate(['/burgers-management'])
  }
  redirectToPortionsManagement() {
    this.router.navigate(['/portions-management'])
  }
  redirectToDrinksManagement() {
    this.router.navigate(['/drinks-management'])
  }
  redirectToAddOnsManagement() {
    this.router.navigate(['/add-ons-management'])
  }
  redirectToCombosManagement() {
    this.router.navigate(['/combos-management'])
  }

  // Orders
  redirectToOrderHistory(){
    this.router.navigate(['/order-history'])
  }
  redirectToOrderManager() {
    this.router.navigate(['/orders-management'])
  }
}
