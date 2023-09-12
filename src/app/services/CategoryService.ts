import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {withTokenHeadersForPost, defaultWithToken} from "../types/Headers";
import {CategoryDTO} from "../types/CategoryDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: `root`
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategoriesForManagement(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${environment.API_URL}/get-all-categories`, {headers: defaultWithToken})
  }
  creatCategory(categoryDTO: CategoryDTO) {
    return this.http.post(`${environment.API_URL}/add-category`, categoryDTO, {headers: withTokenHeadersForPost})
  }
  editCategory(categoryDTO: CategoryDTO){
    return this.http.put(`${environment.API_URL}/edit-category`, categoryDTO, {headers: withTokenHeadersForPost})
  }
  removeCategory(categoryIdentifier: string){
    return this.http.put(`${environment.API_URL}/remove-category/${categoryIdentifier}`, {headers: defaultWithToken})
  }
}

