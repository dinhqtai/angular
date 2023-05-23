import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  Admin = {
    email: '',
    password: '',
  };
  constructor(private router: Router) { }
  loginAdmin() {
    axios.post("http://localhost:8088/api/admin/signin", this.Admin).then((data) => { this.router.navigate([`admin/${data.data.admins._id}`]) });
  }
}
