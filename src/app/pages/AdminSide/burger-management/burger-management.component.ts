import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-burger-admin',
  templateUrl: './burger-management.component.html',
  styleUrls: ['./burger-management.component.css']
})
export class BurgerManagementComponent implements AfterViewInit {

  constructor(
    private router: Router
  ){}

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
  goToAdminPage(): void {
    this.router.navigate(['/admin'])
  }
}
