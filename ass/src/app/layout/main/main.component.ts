import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminComponent implements OnInit {
  getAdmin = {
    name: "",
    email: ""
  }
  constructor(
    private router: ActivatedRoute,
    private link: Router
  ) { }
  ngOnInit(): void {
    var admin = localStorage.getItem("admins");
    if (admin !== null) {
      this.getAdmin = JSON.parse(admin);
    } else {
      this.link.navigate(['/admin/login'])
    }
  }
}
