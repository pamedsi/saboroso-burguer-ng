import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AddOn} from "../models/AddOn";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Headers";
import {AddOnDTO} from "../types/AddOnDTO";
import {ResponseMessage} from "../types/ResponseMessage";

@Injectable({
  providedIn: 'root'
})
export class AddOnService {
  private addOnSource = new BehaviorSubject<AddOn[]>([])
  currentAddOns = this.addOnSource.asObservable()

  constructor(private http: HttpClient) {}

  getAddOns() {
    this.http.get<AddOnDTO[]>(`${environment.API_URL}/get-add-ons`, {headers: defaultWithToken})
      .subscribe(drinks => {
        const allAddOns = drinks.map(addOn => new AddOn(addOn))
        this.addOnSource.next(allAddOns)
      })
    return this.currentAddOns
  }

  insertAddOn(addOnDTO: AddOnDTO){
    this.http.post<ResponseMessage>(`${environment.API_URL}/insert-add-on`, addOnDTO,{headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getAddOns()
      })
  }


  removeAddOn(identifier: string) {

  }
}
