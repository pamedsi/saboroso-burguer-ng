import {Component, OnInit} from '@angular/core';
import {AddOn} from "../../../../models/AddOn";
import {CurrencyPipe} from "@angular/common";
import {AddOnService} from "../../../../services/AddOnService";

@Component({
  selector: 'app-add-on-list-for-management',
  templateUrl: './add-on-list-for-management.component.html',
  styleUrls: ['./add-on-list-for-management.component.css']
})
export class AddOnListForManagementComponent implements OnInit{
  allAddOns!: AddOn[];

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
  cancelEditing(addOn: AddOn) {
    addOn.titleEditing = addOn.getTitle();
    addOn.priceEditing = addOn.getPrice();
    addOn.inStockEditing = addOn.isInStock();
    addOn.setEditable(false);
  }

  editAddOn(addOn: AddOn) {

  }
}
