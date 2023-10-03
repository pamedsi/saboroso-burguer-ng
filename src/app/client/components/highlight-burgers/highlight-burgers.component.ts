import {Component, OnInit} from '@angular/core';
import {BurgerForManagement} from "../../../admin/factories/MenuManagement/BurgerForManagement";
import {BurgerService} from "../../../admin/services/BurgerService/BurgerService";

@Component({
  selector: 'app-highlight-burgers',
  templateUrl: './highlight-burgers.component.html',
  styleUrls: ['./highlight-burgers.component.css']
})
export class HighlightBurgersComponent implements OnInit{
  highLightBurgers!: BurgerForManagement[]

  constructor(private burgerService: BurgerService) {}

  ngOnInit() {
    this.burgerService.currentHighlights.subscribe(highlightBurgers => {
      this.highLightBurgers = highlightBurgers
    })
    this.burgerService.getBurgersForHighlight()
  }
}
