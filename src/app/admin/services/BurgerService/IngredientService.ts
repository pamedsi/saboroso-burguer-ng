import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environment/environment";
import {IngredientDTO} from "../../../shared/models/MenuItemDTO/IngredientDTO";
import {IngredientForManagement} from "../../factories/MenuManagement/IngredientForManagement";
import {BehaviorSubject, map, Observable} from "rxjs";
import {ResponseMessage} from "../../../shared/models/ResponseMessage";
import {defaultWithToken, withTokenAndBody} from "../../utils/Headers";

@Injectable({
  providedIn: "root"
})
export class IngredientService {
  private ingredientsSource = new BehaviorSubject<IngredientForManagement[]>([])
  currentIngredients = this.ingredientsSource.asObservable()

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<IngredientForManagement[]>{
    this.http.get<IngredientDTO[]>(`${environment.API_URL}/menu-ingredients-management`, {headers: defaultWithToken})
      .subscribe(
      ingredientsDTO => {
        const ingredients = ingredientsDTO.map(ingredient => new IngredientForManagement(ingredient))
        this.ingredientsSource.next(ingredients)
      })
    return this.currentIngredients
  }
  createIngredient(ingredient: IngredientDTO){
    this.http.post<ResponseMessage>(`${environment.API_URL}/insert-ingredient`, ingredient, {headers: withTokenAndBody}).subscribe(
      message => {
        console.info(message)
        this.getIngredients()
      })
  }
  updateIngredient(ingredient: IngredientDTO) {
    return this.http.put(`${environment.API_URL}/update-ingredient`, ingredient, {headers: withTokenAndBody})
      .subscribe(message => console.info(message))
  }
  removeIngredient(identifier: string) {
    return this.http.delete(`${environment.API_URL}/remove-ingredient/${identifier}`, {headers: defaultWithToken})
      .subscribe(console.info)
  }
}
