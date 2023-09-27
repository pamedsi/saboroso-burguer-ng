import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Menu, MenuDTO} from "../types/MenuDTO";
import {BurgerDTO} from "../types/BurgerDTO";
import {Burger} from "../models/Burger";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private menuSource = new BehaviorSubject<Menu>({
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
    this.http.get<any>(`${environment.API_URL}/get-menu`)
      .subscribe(menu => {
        menu.burgers = this.burgersToModel(menu.burgers)
        this.menuSource.next(menu)
      })
    return this.currentMenu
  }

  burgersToModel(burgers: {[category: string]: BurgerDTO[]}){
    const model: any = {};

    for (let category in burgers) {
      model[category] = burgers[category].map(burgerDTO => new Burger(burgerDTO));
    }
    return model
  }
}
