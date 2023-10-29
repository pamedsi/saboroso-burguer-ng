import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}
  redirectToOrderForm() {
    this.router.navigate!(['/order-form'])
  }

  redirectToOrderStatus() {
    this.router.navigate!(['/order-status'])
  }

  ngOnInit(){
    sessionStorage.clear()
  }
}
