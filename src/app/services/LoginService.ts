import { HttpClient } from '@angular/common/http';
import { environment } from "../../environment/environment";
import { LoginForm } from "../models/LoginForm";
import { JWT } from "../models/JWT";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http.post<JWT>(`${environment.API_URL}/login`, loginForm)
  }
}
