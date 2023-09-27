import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {AddOnForManagement} from "../models/Management/AddOnForManagement";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Auth/Headers";
import {ResponseMessage} from "../types/ResponseMessage";
import {MenuItemDTO} from "../types/MenuItemDTO/MenuItemDTO";

@Injectable({
  providedIn: 'root'
})
export class AddOnService {
  private addOnSource = new BehaviorSubject<AddOnForManagement[]>([])
  currentAddOns = this.addOnSource.asObservable()

  constructor(private http: HttpClient) {}

  getAddOns() {
    this.http.get<MenuItemDTO[]>(`${environment.API_URL}/get-add-ons`, {headers: defaultWithToken})
      .subscribe(addOns => {
        const allAddOns = addOns.map(addOn => new AddOnForManagement(addOn))
        this.addOnSource.next(allAddOns)
      })
    return this.currentAddOns
  }
  insertAddOn(addOnDTO: MenuItemDTO){
    this.http.post<ResponseMessage>(`${environment.API_URL}/insert-add-on`, addOnDTO,{headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getAddOns()
      })
  }
  removeAddOn(identifier: string) {
    this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-add-on/${identifier}`, {headers: defaultWithToken})
      .subscribe(message => {
        console.info(message)
        this.getAddOns()
      })
  }
  updateAddOn(addOnDTO: MenuItemDTO) {
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-add-on`, addOnDTO,{headers: withTokenAndBody})
      .subscribe(message => {
          console.info(message)
          this.getAddOns()
      })
  }
}
