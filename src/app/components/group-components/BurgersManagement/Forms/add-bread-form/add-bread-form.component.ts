import { Component } from '@angular/core';
import {BreadService} from "../../../../../services/BreadService";
import {BreadDTO} from "../../../../../types/MenuItemDTO/BreadDTO";

@Component({
  selector: 'app-add-bread-form',
  templateUrl: './add-bread-form.component.html',
  styleUrls: ['./add-bread-form.component.css']
})
export class AddBreadFormComponent {
  title!: string
  inStock = true

  constructor(private breadService: BreadService) {}

  setInStock(target: any) {
    this.inStock = target.value === 'Sim'
  }

  addBread() {
    if (!this.title) {
      console.error('Título é obrigatório'); return
    }

    const breadDTO = {
      title: this.title,
      inStock: this.inStock
    } as BreadDTO

    this.title = ''
    this.inStock = true

    this.breadService.insertBread(breadDTO)
  }
}
