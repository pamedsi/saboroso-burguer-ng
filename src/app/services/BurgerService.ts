import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { menuBurgerDTO } from "../components/menu-burger/MenuBurger";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
    constructor(private http: HttpClient) {console.log(environment.API_URL)}
  getBurgersForMenu (){
    return this.http.get<menuBurgerDTO[]>(`${environment.API_URL}/get-menu`)
  }
  getBurgersForHighLight() {
    return this.http.get<menuBurgerDTO[]>(`${environment.API_URL}/high-light-burgers`)
  }
}
