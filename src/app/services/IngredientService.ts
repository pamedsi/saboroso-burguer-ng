import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import {IngredientDTO} from "../types/IngredientDTO";
import {Ingredient} from "../models/Ingredient";
import {BehaviorSubject, map, Observable} from "rxjs";
import {ResponseMessage} from "../types/ResponseMessage";
import {withTokenHeadersForPost} from "../types/Headers";

@Injectable({
  providedIn: "root"
})
export class IngredientService {
  private ingredientsSource = new BehaviorSubject<Ingredient[]>([])
  currentIngredients = this.ingredientsSource.asObservable()

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]>{
    this.http.get<IngredientDTO[]>(`${environment.API_URL}/menu-ingredients`)
      .subscribe(
      ingredientsDTO => {
        const ingredients = ingredientsDTO.map(ingredient => new Ingredient(ingredient))
        this.ingredientsSource.next(ingredients)
      })
    return this.currentIngredients
  }

  createIngredient(ingredient: IngredientDTO){
    return this.http.post<ResponseMessage>(`${environment.API_URL}/insert-ingredient`, ingredient, {headers: withTokenHeadersForPost}).subscribe(
      ({message}) => {
        console.info(message)
        this.getIngredients()
      })
  }
}
