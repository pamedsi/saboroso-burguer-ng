import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {PortionForManagement} from "../factories/MenuManagement/PortionForManagement";
import {PortionDTO} from "../../shared/models/MenuItemDTO/PortionDTO";
import {environment} from "../../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../utils/Headers";
import {ResponseMessage} from "../../shared/models/ResponseMessage";

@Injectable({
  providedIn: 'root'
})
export class PortionService {
  private portionsSource = new BehaviorSubject<PortionForManagement[]>([])
  currentPortions = this.portionsSource.asObservable()

  constructor(private http: HttpClient) {}

  getPortions(): Observable<PortionForManagement[]>{
    this.http.get<PortionDTO[]>(`${environment.API_URL}/get-all-portions`, {headers: defaultWithToken})
      .subscribe(portions => {
        const modelPortions = portions.map(portionDTO => new PortionForManagement(portionDTO))
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

  updatePortion(portionDTO: PortionDTO) {
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-portion`, portionDTO, {headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getPortions()
      })
  }
}
