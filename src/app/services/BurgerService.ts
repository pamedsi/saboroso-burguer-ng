import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";
import {BurgerDTO, InputBurgerDTO} from "../types/BurgerDTO";
import {Observable, map, BehaviorSubject} from 'rxjs';
import { Burger } from "../models/Burger";
import {defaultWithToken, withTokenAndBody} from "../types/Headers";
import {ResponseMessage} from "../types/ResponseMessage";
import {CategoryService} from "./CategoryService";

@Injectable({
  providedIn: "root"
})
export class BurgerService {
  private burgersSource = new BehaviorSubject<Burger[]>([])
  currentBurgersForManagement = this.burgersSource.asObservable()

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

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
            this.getBurgersForMenuManagement()
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
