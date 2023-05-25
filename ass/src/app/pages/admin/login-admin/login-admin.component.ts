import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  Admin = {
    email: '',
    password: '',
  };
  constructor(private router: Router) { }
  loginAdmin() {
    axios.post("http://localhost:8088/api/admin/signin", this.Admin).then((data) => {
      localStorage.setItem("admins", JSON.stringify(data.data.admins));
      this.router.navigate(["/admin"]);
    });
  }
  ngOnInit(): void {
    localStorage.removeItem("admins")
  }
}
