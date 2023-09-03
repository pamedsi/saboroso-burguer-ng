import { HttpClient } from '@angular/common/http';
import { environment } from "../../environment/environment.prod";

interface LoginForm {
  login: string,
  password: string
}

export class LoginComponent {
  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http.post(`environment.API_URL/login`, loginForm)
  }
}
