import {Component, Input} from '@angular/core';
import {MenuItem} from "../../../../factories/Menu/MenuItem";

@Component({
  selector: 'app-item-obs',
  templateUrl: './item-obs.component.html',
  styleUrls: ['./item-obs.component.css']
})
export class ItemObsComponent {
  @Input() item!: MenuItem
  @Input() itemIndex!: number
  @Input() exObs!: string
}
