import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'autoprefixer';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Signin = {
    email: '',
    password: '',
  };
  constructor(
    private router: Router,
  ) { }
  submitForm() {
    axios.post("http://localhost:8088/api/signin", this.Signin)
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data.users));
        this.router.navigate(["/"]);
      });
  }
  ngOnInit(): void {
    localStorage.removeItem("user")
  }
}
