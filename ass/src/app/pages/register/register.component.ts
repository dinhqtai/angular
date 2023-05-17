import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }
  submitForm() {
    axios.post("http://localhost:8088/api/signup", this.Signup).then(() => this.router.navigate(["/login"])).catch(error => console.log(error));
  }
}
