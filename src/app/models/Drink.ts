import {DrinkDTO} from "../types/DrinkDTO";

export class Drink {
  private identifier: string;
  private title: string;
  private ml: number;
  private price: number;
  private inStock: boolean;

  constructor(drinkDTO: DrinkDTO) {
    this.identifier = drinkDTO.identifier;
    this.title = drinkDTO.title;
    this.ml = drinkDTO.ml;
    this.price = drinkDTO.price;
    this.inStock = drinkDTO.inStock;
  }

  getIdentifier(): string {
    return this.identifier;
  }

  setIdentifier(value: string) {
    this.identifier = value;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getMl(): number {
    return this.ml;
  }

  setMl(value: number) {
    this.ml = value;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number) {
    this.price = value;
  }

  isInStock(): boolean {
    return this.inStock;
  }

  setInStock(value: boolean) {
    this.inStock = value;
  }
}
