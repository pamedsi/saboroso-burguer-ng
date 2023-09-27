import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import {BurgerDTO, InputBurgerDTO} from "../types/BurgerDTO";
import {Observable, map, BehaviorSubject} from 'rxjs';
import { Burger } from "../models/Burger";
import {defaultWithToken, withTokenAndBody} from "../types/Headers";
import {ResponseMessage} from "../types/ResponseMessage";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
  private burgersSource = new BehaviorSubject<Burger[]>([])
  currentBurgersForManagement = this.burgersSource.asObservable()

  private highLightsSource = new BehaviorSubject<Burger[]>([])
  currentHighlights = this.highLightsSource.asObservable()

  private burgersForMenuSource = new BehaviorSubject<Burger[]>([])
  currentMenuBurgers = this.burgersForMenuSource.asObservable()

  constructor(
    private http: HttpClient,
    ) {}

  getBurgersForMenu(): Observable<Burger[]>{
    this.http.get<BurgerDTO[]>(`${environment.API_URL}/get-burgers-for-menu`)
        .subscribe( burgersDTO => {
          const burgers = burgersDTO.map(burgerDTO => new Burger(burgerDTO))
          this.burgersForMenuSource.next(burgers)
    })
    return this.currentMenuBurgers
  }
  getBurgersForHighlight(): Observable<Burger[]> {
      this.http.get<BurgerDTO[]>(`${environment.API_URL}/highlight-burgers`)
        .subscribe( burgersDTO => {
          const burgers = burgersDTO.map(burgerDTO => new Burger(burgerDTO))
          this.highLightsSource.next(burgers)
      })
      return this.currentHighlights
    }

  getBurgers(){
    this.http.get<BurgerDTO[]>(`${environment.API_URL}/burgers-management`, {headers: defaultWithToken})
      .subscribe( burgersDTO => {
        const burgers = burgersDTO.map(burgerDTO => new Burger(burgerDTO))
        this.burgersSource.next(burgers)
      })
    return this.currentBurgersForManagement
  }
  addNewBurger(burgerDTO: InputBurgerDTO){
      this.http.post<ResponseMessage>(`${environment.API_URL}/save-burger`, burgerDTO,{headers: withTokenAndBody})
          .subscribe(message => {
            console.info(message)
            this.getBurgers()
          })
  }
  updateBurger(burgerDTO: BurgerDTO) {
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-burger`, burgerDTO,{headers: withTokenAndBody})
      .subscribe(console.info)
    return this.currentBurgersForManagement
  }

  removeBurger(identifier: string) {
    this.http.delete<ResponseMessage>(`${environment.API_URL}/delete-burger/${identifier}`, {headers: defaultWithToken})
      .subscribe(console.info)
    return this.currentBurgersForManagement
  }
}
