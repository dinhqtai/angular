import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'autoprefixer';
import axios from 'axios';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  getId = {
    _id: ""
  }
  getUser = {
    _id: "",
    email: "",
    name: ""
  }
  getProducts = {
    name: "",
  }
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    var user = localStorage.getItem("user");
    if (user !== null) {
      this.getId = JSON.parse(user);
      axios.get(`http://localhost:8088/api/user/${this.getId._id}`).then((data) => this.getUser = data.data)
      console.log(this.getUser.name)

    }
  }
  dangXuat() {
    localStorage.clear()
    window.location.reload()
  }

}
