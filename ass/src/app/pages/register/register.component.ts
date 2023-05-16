import { Component } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Signup = {
    name: "",
    phone: null,
    email: "",
    password: "",
    resetPassword: ""
  }
  submitForm() {
    console.log(this.Signup)
  }
}
