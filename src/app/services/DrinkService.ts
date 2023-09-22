import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Drink} from "../models/Drink";
import {DrinkDTO} from "../types/DrinkDTO";
import {environment} from "../../environment/environment";
import {withTokenAndBody} from "../types/Headers";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinksSource = new BehaviorSubject<Drink[]>([])
  currentCategories = this.drinksSource.asObservable()

  constructor(private http: HttpClient) {}


  getDrinks() {

  }

  saveDrink(drinkDTO: DrinkDTO) {
    this.http.post(`${environment.API_URL}/save-drink`, drinkDTO, {headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getDrinks()
      })
  }

}
