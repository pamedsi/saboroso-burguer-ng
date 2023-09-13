import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { BurgerDTO } from "../types/BurgerDTO";
import {Observable, map, BehaviorSubject} from 'rxjs';
import { Burger } from "../models/Burger";
import { defaultWithToken } from "../types/Headers";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
  private burgersSource = new BehaviorSubject<Burger[]>([])
  currentBurgersForManagement = this.burgersSource.asObservable()

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
    this.http.get<BurgerDTO[]>(`${environment.API_URL}/burgers-management`, {headers: defaultWithToken})
      .subscribe( burgers => {
        return burgers.map(burgerDTO => new Burger(burgerDTO))
      })
    return this.currentBurgersForManagement
  }
}
