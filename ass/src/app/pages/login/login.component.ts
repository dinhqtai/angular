import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Signin = {
    email: '',
    password: '',
  };
  submitForm() {
    axios.post("http://localhost:8088/api/signin", this.Signin)
  }
}
