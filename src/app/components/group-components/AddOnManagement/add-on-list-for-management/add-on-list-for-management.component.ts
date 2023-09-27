import {Component, OnInit} from '@angular/core';
import {AddOnForManagement} from "../../../../models/Management/AddOnForManagement";
import {CurrencyPipe} from "@angular/common";
import {AddOnService} from "../../../../services/AddOnService";

@Component({
  selector: 'app-add-on-list-for-management',
  templateUrl: './add-on-list-for-management.component.html',
  styleUrls: ['./add-on-list-for-management.component.css']
})
export class AddOnListForManagementComponent implements OnInit{
  allAddOns!: AddOnForManagement[];

  constructor(private addOnService: AddOnService, private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    this.addOnService.currentAddOns.subscribe(addOns => this.allAddOns = addOns)
    this.addOnService.getAddOns()
  }
  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }
  deleteAddOn(identifier: string) {
    this.addOnService.removeAddOn(identifier)
  }
  cancelEditing(addOn: AddOnForManagement) {
    addOn.titleEditing = addOn.getTitle();
    addOn.priceEditing = addOn.getPrice();
    addOn.inStockEditing = addOn.isInStock();
    addOn.setEditable(false);
  }

  editAddOn(addOn: AddOnForManagement) {
      let changes = 0
      if (addOn.getTitle() !== addOn.titleEditing) {
        addOn.setTitle(addOn.titleEditing);
        changes++
      }
      if (addOn.getPrice() !== addOn.priceEditing) {
        addOn.setPrice(addOn.priceEditing);
        changes++
      }
      if (addOn.isInStock() !== addOn.inStockEditing) {
        addOn.setInStock(addOn.inStockEditing);
        changes++
      }
      if (!changes) {
        console.info('Nenhuma mudança foi feita!')
        addOn.setEditable(false)
        return
      }

      this.addOnService.updateAddOn(addOn.toDTO())
      addOn.setEditable(false)
  }
}
