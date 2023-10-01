import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-drinks-management',
  templateUrl: './drinks-management.component.html',
  styleUrls: ['./drinks-management.component.css']
})
export class DrinksManagementComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }

  goToAdminPage() {
    this.router.navigate(['/admin'])
  }
}
