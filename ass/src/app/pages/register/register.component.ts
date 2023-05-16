import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Signup = {
    email: "",
    password: "",
  }
  submitForm() {
    axios.post("http://localhost:8088/api/signup", this.Signup)
  }
}
