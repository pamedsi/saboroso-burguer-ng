import {Component, OnInit} from '@angular/core';
import {DrinkService} from "../../../../services/DrinkService";
import {DrinkDTO} from "../../../../types/DrinkDTO";

@Component({
  selector: 'app-add-drink-form',
  templateUrl: './add-drink-form.component.html',
  styleUrls: ['./add-drink-form.component.css']
})
export class AddDrinkFormComponent implements OnInit {
  title!: string
  ml!: number
  inStock = true
  price!: number

  constructor(private drinkService: DrinkService) {}

  ngOnInit() {
  }

  setInStock(target: any) {
    this.inStock = target.value === 'Sim'
  }

  addDrink() {
    if (!this.title) {
      console.error('Título é obrigatório'); return
    }
    if (!this.ml) {
      console.error('mL é obrigatório'); return
    }
    if (!this.price) {
      console.error('Preço é obrigatório'); return
    }

    const drinkDTO = {
      title: this.title,
      ml: this.ml,
      inStock: this.inStock,
      price: this.price
    } as DrinkDTO

    this.title = ''
    this.price = 0
    this.ml = 0
    this.drinkService.saveDrink(drinkDTO)
  }
}
