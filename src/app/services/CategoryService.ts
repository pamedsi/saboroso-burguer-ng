import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {withTokenHeaders} from "../types/Headers";
import {map} from "rxjs";

@Injectable({
  providedIn: `root`
})
export class BurgerService {
  constructor(private http: HttpClient) {}

  getCategoriesForManagement(){
    this.http.get(`${environment.API_URL}`, {headers: withTokenHeaders}).pipe(map(
        categoriesDTO => {
          
        }
      )
    )
  }
}
