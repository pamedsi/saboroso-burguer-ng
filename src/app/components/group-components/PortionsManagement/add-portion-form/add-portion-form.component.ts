import { Component } from '@angular/core';
import {PortionService} from "../../../../services/PortionService";
import {Portion} from "../../../../models/Portion";
import {PortionDTO} from "../../../../types/PortionDTO";

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

  addPortion() {
    if (!this.title) return
    if (!this.description) return
    if (!this.price) return

    const newPortion = {
      title: this.title,
      price: this.price,
      description: this.description,
      pic: this.pic ? this.pic: null,
      inStock: this.inStock
    } as PortionDTO

    this.portionService.addNewPortion(newPortion)
  }
}
