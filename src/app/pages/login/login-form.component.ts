import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/LoginService";
import { LoginForm } from "../../models/LoginForm";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  login!: String
  password!: String
  
  constructor (
    private loginService: LoginService,
    ) {}

  sigIn() {
    const credentials = {login: this.login, password: this.password} as LoginForm
    this.loginService.login(credentials)
  }
}
