import {Component, OnInit} from '@angular/core';
import {Burger} from "../../../../models/Burger";
import {BurgerService} from "../../../../services/BurgerService";

@Component({
  selector: 'app-highlight-burgers',
  templateUrl: './highlight-burgers.component.html',
  styleUrls: ['./highlight-burgers.component.css']
})
export class HighlightBurgersComponent implements OnInit{
  highLightBurgers!: Burger[]

  constructor(private burgerService: BurgerService) {}

  ngOnInit() {
    this.burgerService.currentHighlights.subscribe(highlightBurgers => {
      this.highLightBurgers = highlightBurgers
    })
    this.burgerService.getBurgersForHighlight()
  }
}
