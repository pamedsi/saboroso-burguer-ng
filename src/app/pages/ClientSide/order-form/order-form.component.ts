import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights = false
  order!: []

  constructor(private router: Router){}

  ngOnInit(){}

  onChangeOption($event: Event){
    this.onHighlights = String($event) === 'highlights'
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }
}
