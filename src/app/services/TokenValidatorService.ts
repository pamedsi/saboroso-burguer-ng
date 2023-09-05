import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { headers } from "../models/Headers";
import { JWT } from "../models/JWT";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TokenValidatorService {
  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  validateToken(route: string) {
    const token = localStorage.getItem('token')
    this.http.post<JWT>(`${environment.API_URL}/token`, {token}, {headers}).subscribe(({token}) => {
      localStorage.setItem('redirectingTo', route)
      if (!token) this.router.navigate(['/login'])
      else this.router.navigate([route])
    }) 
  }
}