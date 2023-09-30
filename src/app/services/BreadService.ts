import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {defaultWithToken, withTokenAndBody} from "../types/Auth/Headers";
import {ResponseMessage} from "../types/ResponseMessage";
import {BreadDTO} from "../types/MenuItemDTO/BreadDTO";
import {BreadForManagement} from "../models/Management/BreadForManagement";

@Injectable({
  providedIn: 'root'
})
export class BreadService {
  private breadsSource = new BehaviorSubject<BreadForManagement[]>([])
  currentBreads = this.breadsSource.asObservable()

  constructor(private http: HttpClient) {}

  getBreadsForManagement(): Observable<BreadForManagement[]> {
    this.http.get<BreadDTO[]>(`${environment.API_URL}/get-breads`, {headers: defaultWithToken})
      .subscribe(breads => {
        const burgerBreads = breads.map(bread => new BreadForManagement(bread))
        this.breadsSource.next(burgerBreads)
      })
    return this.currentBreads
  }

  insertBread(breadDTO: BreadDTO) {
    this.http.post<ResponseMessage>(`${environment.API_URL}/insert-bread`, breadDTO, {headers: withTokenAndBody})
      .subscribe((message) => {
        console.info(message);
        this.getBreadsForManagement()
      });
  }

  updateBread(breadDTO: BreadDTO){
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-bread`, breadDTO, {headers: withTokenAndBody})
      .subscribe((message) => {
        console.info(message);
        this.getBreadsForManagement();
      });
  }

  removeBread(breadIdentifier: string){
    this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-bread/${breadIdentifier}`, {headers: defaultWithToken})
      .subscribe(({message}) => {
        console.info(message);
        this.getBreadsForManagement();
      });
  }
}
