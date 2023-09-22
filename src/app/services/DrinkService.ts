import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Drink} from "../models/Drink";
import {DrinkDTO} from "../types/DrinkDTO";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Headers";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinksSource = new BehaviorSubject<Drink[]>([])
  currentDrinks = this.drinksSource.asObservable()

  constructor(private http: HttpClient) {}

  getDrinks() {
    this.http.get<DrinkDTO[]>(`${environment.API_URL}/get-drinks`, {headers: defaultWithToken})
      .subscribe(drinks => {
        const allDrinks = drinks.map(drink => new Drink(drink))
        this.drinksSource.next(allDrinks)
      })
    return this.currentDrinks
  }

  saveDrink(drinkDTO: DrinkDTO) {
    this.http.post(`${environment.API_URL}/save-drink`, drinkDTO, {headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getDrinks()
      })
  }

  removeDrink(identifier: string) {
    this.http.delete(`${environment.API_URL}/remove-drink/${identifier}`, {headers: defaultWithToken})
      .subscribe(message => {
        console.info((message))
        this.getDrinks()
      })
  }
}
