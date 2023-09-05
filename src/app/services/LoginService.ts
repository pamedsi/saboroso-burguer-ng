import { HttpClient } from '@angular/common/http';
import { environment } from "../../environment/environment";
import { LoginForm } from "../models/LoginForm";
import { JWT } from "../models/JWT";
import { Injectable } from "@angular/core";
import { headers } from '../models/Headers';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  login(loginForm: LoginForm) {
    return this.http.post<JWT>(`${environment.API_URL}/login`, loginForm, {headers}).subscribe(({token}) => {
      const redirectingTo = sessionStorage.getItem('redirectingTo')
      localStorage.setItem('token', token)
      this.router.navigate([redirectingTo ?? '/management'])
    })
  }
}
