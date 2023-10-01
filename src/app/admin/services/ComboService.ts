import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Combo} from "../factories/MenuManagement/ComboForManagement";
import {environment} from "../../../environment/environment";
import {ComboDTO} from "../../shared/models/MenuItemDTO/ComboDTO";
import {ResponseMessage} from "../../shared/models/ResponseMessage";
import {defaultWithToken, withTokenAndBody} from "../utils/Headers";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ComboService {
  private combosSource = new BehaviorSubject<Combo[]>([])
  currentCombos = this.combosSource.asObservable()

  constructor(private http: HttpClient) {}

  getCombos(): Observable<Combo[]> {
    this.http.get<ComboDTO[]>(`${environment.API_URL}/get-all-combos`, {headers: defaultWithToken})
      .subscribe(combos => {
        const allCombos = combos.map(combo => new Combo(combo))
        this.combosSource.next(allCombos)
      })
    return this.currentCombos
  }
  saveCombo(comboDTO: ComboDTO) {
    this.http.post<ResponseMessage>(`${environment.API_URL}/add-combo`, comboDTO, {headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getCombos()
      })
  }
  removeCombo(comboIdentifier: string){
    this.http.delete<ResponseMessage>(`${environment.API_URL}/remove-combo/${comboIdentifier}`, {headers: defaultWithToken})
      .subscribe(message => {
        console.info(message)
        this.getCombos()
      })
  }
  updateCombo(comboDTO: ComboDTO) {
    this.http.put<ResponseMessage>(`${environment.API_URL}/update-combo`, comboDTO,{headers: withTokenAndBody})
      .subscribe(message => {
        console.info(message)
        this.getCombos()
      })
  }

}
