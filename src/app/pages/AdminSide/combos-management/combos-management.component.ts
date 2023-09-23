import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-combos-management',
  templateUrl: './combos-management.component.html',
  styleUrls: ['./combos-management.component.css']
})
export class CombosManagementComponent {

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
