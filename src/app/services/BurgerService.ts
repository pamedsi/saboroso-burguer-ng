import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment.prod";
import { menuBurgerDTO } from "../components/menu-burger/MenuBurger";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
    constructor(private http: HttpClient) {}
  getBurgersForMenu (){
    return this.http.get<menuBurgerDTO[]>(`${environment.API_URL}/get-menu-burgers`)
  }
  getBurgersForHighLight() {
    return this.http.get<menuBurgerDTO[]>(`${environment.API_URL}/high-lights-burger`)
  }
}
