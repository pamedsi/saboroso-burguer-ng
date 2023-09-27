import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {MenuDTO} from "../types/MenuDTO";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private menuSource = new BehaviorSubject<MenuDTO>({
    burgers: {},
    portions: [],
    combos: [],
    drinks: [],
    addOns: []
  })
  currentMenu = this.menuSource.asObservable()

  constructor(
    private http: HttpClient,
  ) {}

  getMenu(){
    this.http.get<MenuDTO>(`${environment.API_URL}/get-menu`)
      .subscribe(menu => {
        this.menuSource.next(menu)
      })
    return this.currentMenu
  }
}
