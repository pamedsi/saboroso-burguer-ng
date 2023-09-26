import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  onHighlights = true

  constructor() {}

  ngOnInit(){}

  onChangeOption($event: Event){
    this.onHighlights = String($event) === 'highlights'
  }
}
