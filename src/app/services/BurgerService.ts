import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { BurgerDTO } from "../dto/BurgerDTO";
import { Observable, map } from 'rxjs';
import { Burger } from "../models/Burger";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
    constructor(private http: HttpClient) {}

  getBurgersForMenu(): Observable<Burger[]>{
    return this.http.get<BurgerDTO[]>(`${environment.API_URL}/get-menu`).pipe(
      map(burgersDTO => {
        return burgersDTO.map(burgerDTO => new Burger(burgerDTO))
      })
    )
  }
  getBurgersForHighLight(): Observable<Burger[]> {
      return this.http.get<BurgerDTO[]>(`${environment.API_URL}/highlight-burgers`).pipe(
        map(burgersDTO => {
          return burgersDTO.map(burgerDTO => new Burger(burgerDTO))
        })
      )
    }
  getBurgersForMenuManagement(){
    return this.http.get<BurgerDTO[]>(`${environment.API_URL}/burgers-management`).pipe(
      map(burgersDTO => {
        return burgersDTO.map(burgerDTO => new Burger(burgerDTO))
      })
    )
  }
}
