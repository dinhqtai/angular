import { Component } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signup = {
    name: "",
    phone: "",
    email: "",
    password: "",
    resetPassword: ""
  }
  SignUp() {
    console.log(this.signup)
  }
}
