import { Component } from '@angular/core';
import { ComboService } from 'src/app/admin/services/ComboService';
import {ComboDTO} from "../../../../../shared/models/MenuItemDTO/ComboDTO";

@Component({
  selector: 'app-add-combo-form',
  templateUrl: './add-combo-form.component.html',
  styleUrls: ['./add-combo-form.component.css']
})
export class AddComboFormComponent {
  title!: string;
  description!: string;
  price!: number;
  pic!: string;
  inStock: boolean = true

  constructor(private comboService: ComboService) {}

  setInStock(target: any) {
    this.inStock = target.value === 'Sim'
  }

  setPic(pic: string) {
    this.pic = pic
  }

  addCombo() {
      if (!this.title) {
          console.error('Título é obrigatório'); return
      }
      if (!this.description) {
          console.error('Descrição é obrigatório'); return
      }
      if (!this.price) {
          console.error('Preço é obrigatório'); return
      }

    const newCombo = {
      title: this.title,
      price: this.price,
      description: this.description,
      pic: this.pic ?? null,
      inStock: this.inStock
    } as ComboDTO

    this.title = ''
    this.description = ''
    this.price = 0
    this.pic = ''
    this.inStock = true

    this.comboService.saveCombo(newCombo)
  }
}
