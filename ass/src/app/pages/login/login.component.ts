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
    axios.post("http://localhost:8088/api/signin", this.Signin).then((data) => {
      console.log(data.data.users.role);
      if (data.data.users.role === "admin") {
        this.router.navigate([`/admin/${data.data.users._id}`]);
      } else {
        this.router.navigate(["/"]);
      }
    })
  }
}
