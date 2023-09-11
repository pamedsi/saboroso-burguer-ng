import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {withTokenHeaders} from "../types/Headers";
import {CategoryDTO} from "../types/CategoryDTO";

@Injectable({
  providedIn: `root`
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategoriesForManagement(){
    return this.http.get<CategoryDTO[]>(`${environment.API_URL}/get-all-categories`, {headers: withTokenHeaders})
  }
}
