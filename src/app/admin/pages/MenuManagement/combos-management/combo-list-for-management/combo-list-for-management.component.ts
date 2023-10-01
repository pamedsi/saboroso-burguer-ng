import {Component, OnInit} from '@angular/core';

import {CurrencyPipe} from "@angular/common";
import {ComboService} from "../../../../services/ComboService";
import {Combo} from "../../../../factories/MenuManagement/ComboForManagement";

@Component({
  selector: 'app-combo-list-for-management',
  templateUrl: './combo-list-for-management.component.html',
  styleUrls: ['./combo-list-for-management.component.css']
})
export class ComboListForManagementComponent implements OnInit{
  allCombos!: Combo[]

  constructor(private comboService: ComboService, private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    this.comboService.currentCombos.subscribe(combos => this.allCombos = combos)
    this.comboService.getCombos()
  }
  formatPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }
  deleteCombo(identifier: string) {
    this.comboService.removeCombo(identifier)
  }
  cancelEditing(combo: Combo) {
    combo.titleEditing = combo.getTitle();
    combo.priceEditing = combo.getPrice();
    combo.inStockEditing = combo.isInStock();
    combo.setEditable(false);
  }

  editCombo(combo: Combo) {
    let changes = 0
    if (combo.getTitle() !== combo.titleEditing) {
      combo.setTitle(combo.titleEditing);
      changes++
    }
    if (combo.getDescription() !== combo.descriptionEditing) {
      combo.setDescription(combo.descriptionEditing);
      changes++
    }
    if (combo.getPrice() !== combo.priceEditing) {
      combo.setPrice(combo.priceEditing);
      changes++
    }
    if (combo.isInStock() !== combo.inStockEditing) {
      combo.setInStock(combo.inStockEditing);
      changes++
    }
    if (!changes) {
      console.info('Nenhuma mudança foi feita!')
      combo.setEditable(false)
      return
    }

    this.comboService.updateCombo(combo.toDTO())
    combo.setEditable(false)
  }

}
