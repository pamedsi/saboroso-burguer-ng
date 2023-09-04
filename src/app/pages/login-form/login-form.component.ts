import { Component } from '@angular/core';
import { LoginService } from "../../services/LoginService";
import { LoginForm } from "../../models/LoginForm";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  login!: String
  password!: String
  private token!: String

  constructor(private loginService: LoginService) {}

  sigIn() {
    const credentials = {login: this.login, password: this.password} as LoginForm
    this.loginService.login(credentials).subscribe(JWT => {
      this.token = JWT.token
      console.log(this.token)
    })
  }
}
