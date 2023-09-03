import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent {
  login!: String
  password!: String
  // injetar dependência do loginSewrvice

  sigIn() {
      console.log(this.login, this.password)
  }
}
