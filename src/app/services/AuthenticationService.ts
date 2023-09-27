import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../types/Auth/LoginFormDTO';
import { environment } from 'src/environment/environment';
import { defaultHeaders } from '../types/Auth/Headers';
import { JWT } from '../types/Auth/JWTDTO';
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

  validTokenForAdmin(): Observable<boolean> {
      const token = localStorage.getItem('token')
      return this.http.post<JWT>(`${environment.API_URL}/admin-token`, {token}, {headers: defaultHeaders})
        .pipe(
          map(({role}) => role === "ADMIN"),
          catchError(_ => of(false))
        )
  }

  login(credentials: LoginForm): Observable<boolean> {
    return this.http.post<JWT>(`${environment.API_URL}/login`, credentials, {headers: defaultHeaders})
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
