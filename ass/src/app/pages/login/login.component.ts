import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
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
    private dataServise: DataService
  ) { }
  submitForm() {
    axios.post("http://localhost:8088/api/signin", this.Signin).then(() => this.router.navigate(['/']))
  }
  ngOnInit(): void {
  }
}
