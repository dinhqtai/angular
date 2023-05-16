import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }
  submitForm() {
    axios.post("http://localhost:8088/api/signin", this.Signin).then(() => this.router.navigate(["/"])).catch(error => console.log(error));
  }
}
