import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { headers } from "../models/Headers";
import { JWT } from "../models/JWT";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TokenValidationService {
  private token = localStorage.getItem('token')

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  forRouteAccess(route: string) {
    return this.http.post<JWT>(`${environment.API_URL}/token`, {token: this.token}, {headers}).subscribe(({token}) => {
      sessionStorage.setItem('redirectingTo', route)
      if (!token) this.router.navigate(['/login'])
      else this.router.navigate([route])
    }) 
  }
}