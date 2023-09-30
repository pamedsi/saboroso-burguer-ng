import { Component } from '@angular/core';
import {BreadForManagement} from "../../../../../models/Management/BreadForManagement";
import {BreadService} from "../../../../../services/BreadService";

@Component({
  selector: 'app-bread-list-for-management',
  templateUrl: './bread-list-for-management.component.html',
  styleUrls: ['./bread-list-for-management.component.css']
})
export class BreadListForManagementComponent {
  allBreads!: BreadForManagement[];

  constructor(private breadService: BreadService) {}

  ngOnInit() {
    this.breadService.currentBreads.subscribe(breads => this.allBreads = breads)
    this.breadService.getBreadsForManagement()
  }

  deleteBread(identifier: string) {
    this.breadService.removeBread(identifier)
  }

  cancelEditing(bread: BreadForManagement) {
    bread.titleEditing = bread.getTitle();
    bread.inStockEditing = bread.isInStock();
    bread.setEditable(false);
  }

  editBread(bread: BreadForManagement) {
    let changes = 0
    if (bread.getTitle() !== bread.titleEditing) {
      bread.setTitle(bread.titleEditing);
      changes++
    }
    if (bread.isInStock() !== bread.inStockEditing) {
      bread.setInStock(bread.inStockEditing);
      changes++
    }
    if (!changes) {
      console.info('Nenhuma mudança foi feita!')
      bread.setEditable(false)
      return
    }

    this.breadService.updateBread(bread.toDTO())
    bread.setEditable(false)
  }
}
