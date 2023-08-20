import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment.prod";
import {menuBurgerDTO} from "../components/menu-burger/MenuBurger";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
  private url = environment.API_URL
  constructor(private http: HttpClient) {}
  getBurgersForMenu (){
    return this.http.get<menuBurgerDTO[]>(`${this.url}/get-menu-burgers`)
  }
  getBurgersForHighLight() {
    // return this.http.get<menuBurgerDTO[]>(`${this.url}/high-lights-burger`)
    return this.http.get<menuBurgerDTO[]>(`${this.url}/get-menu-burgers`)
  }
}
