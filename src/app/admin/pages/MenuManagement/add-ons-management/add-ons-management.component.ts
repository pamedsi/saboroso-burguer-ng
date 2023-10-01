import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ons-management',
  templateUrl: './add-ons-management.component.html',
  styleUrls: ['./add-ons-management.component.css']
})
export class AddOnsManagementComponent {

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
