import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Portion} from "../models/Portion";
import {PortionDTO} from "../types/PortionDTO";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Headers";
import {ResponseMessage} from "../types/ResponseMessage";

@Injectable({
  providedIn: 'root'
})
export class PortionService {
  private portionsSource = new BehaviorSubject<Portion[]>([])
  currentPortions = this.portionsSource.asObservable()

  constructor(private http: HttpClient) {}

  getPortions(): Observable<Portion[]>{
    this.http.get<PortionDTO[]>(`${environment.API_URL}/get-all-portions`, {headers: defaultWithToken})
      .subscribe(portions => {
        const modelPortions = portions.map(portionDTO => new Portion(portionDTO))
        this.portionsSource.next(modelPortions)
      })
    return this.currentPortions
  }

  addNewPortion(newPortion: PortionDTO) {
    this.http.post<ResponseMessage>(`${environment.API_URL}/save-portion`, newPortion,{headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getPortions()
      })
  }

  removePortion(portionIdentifier: string) {
    this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-portion/${portionIdentifier}`, {headers: defaultWithToken})
      .subscribe(message => {
        console.info(message)
        this.getPortions()
      })
    }
}
