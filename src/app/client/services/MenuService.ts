import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

import {environment} from "../../../environment/environment";

import {MenuForClientDTO} from "../../shared/models/MenuForClientDTO";
import {BurgerForMenu} from "../factories/Menu/BurgerForMenu";
import {BurgerDTO} from "../../shared/models/MenuItemDTO/BurgerDTO";
import {PortionForMenu} from "../factories/Menu/PortionForMenu";
import {ComboForMenu} from "../factories/Menu/ComboForMenu";
import {DrinkForMenu} from "../factories/Menu/DrinkForMenu";
import {AddOnForMenu} from "../factories/Menu/AddOnForMenu";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private menuSource = new BehaviorSubject<MenuForClientDTO>({
    burgers: {},
    portions: [],
    drinks: [],
    breads: [],
    combos: [],
    addOns: []
  })
  currentMenu = this.menuSource.asObservable()

  constructor (private http: HttpClient) {}

  getBurgersForMenu(): Observable<{[category: string]: BurgerForMenu[]}> {
    return this.currentMenu.pipe(
        map(menu => this.burgersToModel(menu.burgers))
    )
  }
  getPortionsForMenu(): Observable<PortionForMenu[]> {
    return this.currentMenu.pipe(
        map(menu =>
            menu.portions.map(portionDTO => new PortionForMenu(portionDTO))
        )
    )
  }
  getDrinksForMenu(){
    return this.currentMenu.pipe(
      map(menu =>
        menu.drinks.map(drinkDTO => new DrinkForMenu(drinkDTO))
      )
    );
  }
  getCombosForMenu(){
    return this.currentMenu.pipe(
        map(menu =>
            menu.combos.map(comboDTO => new ComboForMenu(comboDTO))
        )
    );
  }
  getBreadsForMenu(){
    return this.currentMenu.pipe(
      map(menu => menu.breads)
    )
  }
  getAddOnsForMenu(){
    return this.currentMenu.pipe(
        map(menu =>
            menu.addOns.map(addOnDTO => new AddOnForMenu(addOnDTO))
        )
    );
  }
  getMenu(){
    return this.http.get<MenuForClientDTO>(`${environment.API_URL}/get-menu`).pipe(
        tap(menu => this.menuSource.next(menu)),
        catchError(error => {
          console.error('Erro buscando o cardápio', error);
          return throwError(() => error);
        })
    )
  }
  burgersToModel(burgers: {[category: string]: BurgerDTO[]}){
    const model: any = {};

    for (let category in burgers) {
      model[category] = burgers[category].map(burgerDTO => new BurgerForMenu(burgerDTO));
    }
    return model as {[category: string]: BurgerForMenu[]}
  }
}
