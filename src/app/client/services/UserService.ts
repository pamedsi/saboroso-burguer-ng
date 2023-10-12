import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {UserClientDTO} from "../models/UserClientDTO";
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUserByPhoneNumber(phoneNumber: string): Observable<UserClientDTO | null> {
    return this.http.get<UserClientDTO>(`${environment.API_URL}/get-user-by-phone-number/${phoneNumber}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Ocorreu um erro!', error);
          return of(null);
        })
      )
  }
}
