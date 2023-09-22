import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {withTokenAndBody, defaultWithToken} from "../types/Headers";
import {CategoryDTO} from "../types/CategoryDTO";
import {Observable, BehaviorSubject} from "rxjs";
import {ResponseMessage} from "../types/ResponseMessage";
import {BurgerCategory} from "../models/BurgerCategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesSource = new BehaviorSubject<BurgerCategory[]>([])
  currentCategories = this.categoriesSource.asObservable()

  constructor(private http: HttpClient) {}

  getCategoriesForManagement(): Observable<BurgerCategory[]> {
    this.http.get<CategoryDTO[]>(`${environment.API_URL}/get-all-categories`, {headers: defaultWithToken})
      .subscribe(categories => {
        const burgerCategories = categories.map(category => new BurgerCategory(category))
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
