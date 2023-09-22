import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-portions-management',
  templateUrl: './portions-management.component.html',
  styleUrls: ['./portions-management.component.css']
})
export class PortionsManagementComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }

  goToAdminPage(): void {
    this.router.navigate(['/admin'])
  }
}
