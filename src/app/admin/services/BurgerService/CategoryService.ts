import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/environment";
import {withTokenAndBody, defaultWithToken} from "../../utils/Headers";
import {CategoryDTO} from "../../../shared/models/MenuItemDTO/CategoryDTO";
import {Observable, BehaviorSubject} from "rxjs";
import {ResponseMessage} from "../../../shared/models/ResponseMessage";
import {CategoryForManagement} from "../../factories/MenuManagement/CategoryForManagement";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesSource = new BehaviorSubject<CategoryForManagement[]>([])
  currentCategories = this.categoriesSource.asObservable()

  constructor(private http: HttpClient) {}

  getCategoriesForManagement(): Observable<CategoryForManagement[]> {
    this.http.get<CategoryDTO[]>(`${environment.API_URL}/get-all-categories`, {headers: defaultWithToken})
      .subscribe(categories => {
        const burgerCategories = categories.map(category => new CategoryForManagement(category))
        this.categoriesSource.next(burgerCategories)
      })
    return this.currentCategories
  }

  createCategory(categoryDTO: CategoryDTO) {
    this.http.post<ResponseMessage>(`${environment.API_URL}/add-category`, categoryDTO, {headers: withTokenAndBody})
      .subscribe((message) => {
        console.info(message);
        this.getCategoriesForManagement()
      });
  }

  updateCategory(categoryDTO: CategoryDTO){
    this.http.put<ResponseMessage>(`${environment.API_URL}/edit-category`, categoryDTO, {headers: withTokenAndBody})
      .subscribe(({message}) => {
        console.info(message);
        this.getCategoriesForManagement();
      });
  }

  removeCategory(categoryIdentifier: string){
    this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-category/${categoryIdentifier}`, {headers: defaultWithToken})
      .subscribe(({message}) => {
        console.info(message);
        this.getCategoriesForManagement();
      });
  }
}
