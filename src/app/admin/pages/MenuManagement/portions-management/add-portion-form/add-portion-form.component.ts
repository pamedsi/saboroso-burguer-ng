import { Component } from '@angular/core';
import {PortionService} from "../../../../services/PortionService";
import {PortionDTO} from "../../../../../shared/models/MenuItemDTO/PortionDTO";


@Component({
  selector: 'app-add-portion-form',
  templateUrl: './add-portion-form.component.html',
  styleUrls: ['./add-portion-form.component.css']
})
export class AddPortionFormComponent {
  title!: string;
  description!: string;
  price!: number;
  pic!: string;
  inStock: boolean = true

  constructor(private portionService: PortionService) {}

  setInStock(target: any) {
    this.inStock = target.value === 'Sim'
  }

  setPic(pic: string) {
    this.pic = pic
  }

  addPortion() {
    if (!this.title) return
    if (!this.description) return
    if (!this.price) return

    const newPortion = {
      title: this.title,
      price: this.price,
      description: this.description,
      pic: this.pic ?? null,
      inStock: this.inStock
    } as PortionDTO

    this.title = ''
    this.description = ''
    this.price = 0
    this.pic = ''
    this.inStock = true

    this.portionService.addNewPortion(newPortion)
  }
}
