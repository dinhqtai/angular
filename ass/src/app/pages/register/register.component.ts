import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Signup } from 'src/app/commom/model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Signup: Signup = {
    name: "",
    email: "",
    password: "",
  }
  constructor(private router: Router) { }
  submitForm() {
    axios.post("http://localhost:8088/api/signup", this.Signup).then(() => this.router.navigate(["/login"])).catch(error => console.log(error));
  }
  ngOnInit(): void {
    localStorage.removeItem("user")
  }
}
