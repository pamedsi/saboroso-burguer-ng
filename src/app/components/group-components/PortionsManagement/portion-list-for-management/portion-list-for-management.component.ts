import {Component, OnInit} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {PortionForManagement} from "../../../../models/Management/PortionForManagement";
import {PortionService} from "../../../../services/PortionService";


@Component({
  selector: 'app-portion-list-for-management',
  templateUrl: './portion-list-for-management.component.html',
  styleUrls: ['./portion-list-for-management.component.css']
})
export class PortionListForManagementComponent implements OnInit{
  allPortions!: PortionForManagement[]

  constructor(private portionService: PortionService, private currencyPipe: CurrencyPipe) {}

  ngOnInit(){
    this.portionService.currentPortions.subscribe(
      portions => this.allPortions = portions
    )
    this.portionService.getPortions()
  }
  getFormattedPrice(price: number) {
    return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
  }

  deletePortion(portionIdentifier: string) {
    if (portionIdentifier.length !== 36) return
    this.allPortions = this.allPortions.filter(portion => portion.getIdentifier() !== portionIdentifier)
    this.portionService.removePortion(portionIdentifier);
  }

  cancelEditing(portion: PortionForManagement) {
    portion.titleEditing = portion.getTitle()
    portion.descriptionEditing = portion.getDescription()
    portion.priceEditing = portion.getPrice()
    portion.picEditing = portion.getPic()
    portion.inStockEditing = portion.getInStock()
    portion.setEditable(false)
  }

  editPortion(portion: PortionForManagement) {
    let changes = 0
    if (portion.getTitle() !== portion.titleEditing) {
      portion.setTitle(portion.titleEditing);
      changes++
    }
    if (portion.getDescription() !== portion.descriptionEditing) {
      portion.setDescription(portion.descriptionEditing);
      changes++
    }
    if (portion.getPrice() !== portion.priceEditing) {
      portion.setPrice(portion.priceEditing);
      changes++
    }
    if (portion.getPic() !== portion.picEditing) {
      portion.setPic(portion.picEditing ? portion.picEditing : null);
      changes++
    }
    if (portion.getInStock() !== portion.inStockEditing) {
      portion.setInStock(portion.inStockEditing);
      changes++
    }
    if (!changes) {
      console.info('Nenhuma mudança foi feita!')
      portion.setEditable(false)
      return
    }

    this.portionService.updatePortion(portion.toDTO())
    portion.setEditable(false)
  }
}
