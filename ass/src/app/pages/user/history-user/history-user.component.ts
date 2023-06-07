import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { Router } from '@angular/router';
import axios from 'axios';
interface Product {
  _id: string;
  name: string;
  price: number;
  images: string;
  soLuong: number
}
@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.scss']
})
export class HistoryUserComponent implements OnInit {
  constructor(
    private router: Router
  ) { }
  getHistory: Product[] = []
  getIdUser = {
    _id: "",
  }
  ngOnInit(): void {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    if (this.getIdUser._id) {
      axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
        this.getHistory = data.data.history;
      })
    } else {
      this.router.navigate(['/login'])
    }
  }
}
