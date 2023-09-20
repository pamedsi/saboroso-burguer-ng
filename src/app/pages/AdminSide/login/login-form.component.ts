import { Component, OnInit } from '@angular/core';
import { LoginForm } from "../../../types/LoginFormDTO";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  login!: String
  password!: String

  constructor (
    private authService: AuthenticationService,
    private router: Router
    ) {}

  sigIn() {
    const credentials = {login: this.login, password: this.password} as LoginForm
    this.authService.login(credentials).subscribe(validCredentials => {
      if (validCredentials) {
        const redirectingTo = sessionStorage.getItem('redirectingTo')
        this.router.navigate([redirectingTo ?? '/admin'])
    }})
  }
}
