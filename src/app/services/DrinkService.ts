import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DrinkForManagement} from "../models/Management/DrinkForManagement";
import {DrinkDTO} from "../types/MenuItemDTO/DrinkDTO";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Auth/Headers";
import {ResponseMessage} from "../types/ResponseMessage";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinksSource = new BehaviorSubject<DrinkForManagement[]>([])
  currentDrinks = this.drinksSource.asObservable()

  constructor(private http: HttpClient) {}

  getDrinks() {
    this.http.get<DrinkDTO[]>(`${environment.API_URL}/get-drinks`, {headers: defaultWithToken})
      .subscribe(drinks => {
        const allDrinks = drinks.map(drink => new DrinkForManagement(drink))
        this.drinksSource.next(allDrinks)
      })
    return this.currentDrinks
  }

  saveDrink(drinkDTO: DrinkDTO) {
    this.http.post<ResponseMessage>(`${environment.API_URL}/save-drink`, drinkDTO, {headers: withTokenAndBody})
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

  updateDrink(drinkDTO: DrinkDTO) {
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-drink`, drinkDTO,{headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getDrinks()
      })
  }
}
