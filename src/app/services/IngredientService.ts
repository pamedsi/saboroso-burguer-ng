import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import {IngredientDTO} from "../types/IngredientDTO";
import {Ingredient} from "../models/Ingredient";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IngredientService {

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]>{
    return this.http.get<IngredientDTO[]>(`${environment.API_URL}/menu-ingredients`).pipe(map(
      ingredientsDTO => ingredientsDTO.map(
        ingredient => new Ingredient(ingredient))
    ))
  }
}
