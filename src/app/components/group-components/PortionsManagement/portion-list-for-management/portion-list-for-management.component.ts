import {Component, OnInit} from '@angular/core';
import {Portion} from "../../../../models/Portion";
import {PortionService} from "../../../../services/PortionService";

@Component({
  selector: 'app-portion-list-for-management',
  templateUrl: './portion-list-for-management.component.html',
  styleUrls: ['./portion-list-for-management.component.css']
})
export class PortionListForManagementComponent implements OnInit{
  allPortions!: Portion[]

  constructor(private portionService: PortionService) {}

  ngOnInit(){
    this.portionService.currentPortions.subscribe(
      portions => this.allPortions = portions
    )
    this.portionService.getPortions()
  }

  deletePortion(portionIdentifier: string) {
    if (portionIdentifier.length !== 36) return
    this.allPortions = this.allPortions.filter(portion => portion.getIdentifier() !== portionIdentifier)
    this.portionService.removePortion(portionIdentifier);
  }

  cancelEditing(portion: Portion) {

  }

  editPortion(portion: Portion) {

  }
}
