import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import {BurgerDTO} from "../types/MenuItemDTO/BurgerDTO";
import {Observable, BehaviorSubject} from 'rxjs';
import { BurgerForManagement } from "../models/Management/BurgerForManagement";
import {defaultWithToken, withTokenAndBody} from "../types/Auth/Headers";
import {ResponseMessage} from "../types/ResponseMessage";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
  private burgersSource = new BehaviorSubject<BurgerForManagement[]>([])
  currentBurgersForManagement = this.burgersSource.asObservable()

  private highLightsSource = new BehaviorSubject<BurgerForManagement[]>([])
  currentHighlights = this.highLightsSource.asObservable()

  constructor(
    private http: HttpClient,
    ) {}

  getBurgersForHighlight(): Observable<BurgerForManagement[]> {
      this.http.get<BurgerDTO[]>(`${environment.API_URL}/highlight-burgers`)
        .subscribe( burgersDTO => {
          const burgers = burgersDTO.map(burgerDTO => new BurgerForManagement(burgerDTO))
          this.highLightsSource.next(burgers)
      })
      return this.currentHighlights
    }
  getBurgers(){
    this.http.get<BurgerDTO[]>(`${environment.API_URL}/burgers-management`, {headers: defaultWithToken})
      .subscribe( burgersDTO => {
        const burgers = burgersDTO.map(burgerDTO => new BurgerForManagement(burgerDTO))
        this.burgersSource.next(burgers)
      })
    return this.currentBurgersForManagement
  }
  addNewBurger(burgerDTO: BurgerDTO){
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
