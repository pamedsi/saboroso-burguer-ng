import { Component } from '@angular/core';

import {AddOnService} from "../../../../services/AddOnService";
import {BaseMenuItemDTO} from "../../../../../shared/models/BaseMenuItemDTO";

@Component({
  selector: 'app-create-add-on-form',
  templateUrl: './create-add-on-form.component.html',
  styleUrls: ['./create-add-on-form.component.css']
})
export class CreateAddOnFormComponent {
  title!: string
  price!: number
  inStock = true

  constructor(private addOnService: AddOnService) {}


  setInStock(target: any) {
    this.inStock = target.value === 'Sim'
  }

  createAddOn() {
    if (!this.title) {
      console.error('Título é obrigatório'); return
    }
    if (!this.price) {
      console.error('Preço é obrigatório'); return
    }

    const addOnDTO = {
      title: this.title,
      price: this.price,
      inStock: this.inStock
    } as BaseMenuItemDTO

    this.title = ''
    this.price = 0
    this.inStock = true

    this.addOnService.insertAddOn(addOnDTO)
  }

}
