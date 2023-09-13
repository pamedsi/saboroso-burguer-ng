import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {withTokenHeadersForPost, defaultWithToken} from "../types/Headers";
import {CategoryDTO} from "../types/CategoryDTO";
import {Observable} from "rxjs";
import {ResponseMessage} from "../types/ResponseMessage";

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
  updateCategory(categoryDTO: CategoryDTO){
      this.http.put<ResponseMessage>(`${environment.API_URL}/edit-category`, categoryDTO, {headers: withTokenHeadersForPost})
        .subscribe(({message}) => console.info(message))
  }
  removeCategory(categoryIdentifier: string){
    return this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-category/${categoryIdentifier}`, {headers: defaultWithToken})
      .subscribe(({message}) => console.info(message))
  }
}
