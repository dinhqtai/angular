import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';
interface Product {
  _id: string;
  name: string;
  price: string;
  images: string;
}
@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.scss']
})
export class HistoryUserComponent implements OnInit {
  getHistory: Product[] = []
  getIdUser = {
    _id: "",
  }
  ngOnInit(): void {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => { this.getHistory = data.data.history })
  }
}
