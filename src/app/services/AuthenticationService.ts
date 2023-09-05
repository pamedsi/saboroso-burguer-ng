import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../models/LoginForm';
import { environment } from 'src/environment/environment';
import { headers } from '../models/Headers';
import { JWT } from '../models/JWT';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  validToken(): Observable<boolean> {
      const token = localStorage.getItem('token')
      return this.http.post<JWT>(`${environment.API_URL}/token`, {token}, {headers})
        .pipe(
          map(({token}) => Boolean(token)),
          catchError(_ => of(false))
        )
  }    

  login(credentials: LoginForm): Observable<boolean> {
    return this.http.post<JWT>(`${environment.API_URL}/login`, credentials, {headers})
      .pipe(
        map(({token}) => {
          if (!token) throw new Error("Login ou senha incorretos!");
          localStorage.setItem('token', token)
          this.isAuthenticated = true
          return true;
        }),
        catchError(error => {
          console.log(error)
          return of(false)
        })
      )
  }

  logout(): void {
    localStorage.removeItem('token')
    this.isAuthenticated = false;
    this.router.navigate(['login'])
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
