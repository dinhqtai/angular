import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';
interface Cart {
  _id: string;
  name: string;
  price: number;
  images: string;
  soLuong: number
}
interface History {
  _id: string;
  name: string;
  price: number;
  images: string;
  soLuong: string;
  status: string
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  getTongPrice: number = 0
  tongAll: number = 0
  getProducts: Cart[] = []
  getIdUser = {
    _id: "",
    history: [] as Cart[]
  }
  setUser = {
    history: [] as Cart[]
  }
  ngOnInit(): void {
    this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    this.getProducts.map((data) => {
      this.getProducts.forEach((datap) => {
        this.getTongPrice = data.price * data.soLuong
      })
      this.tongAll = this.getTongPrice + this.tongAll
    })
  }
  thanhToan() {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    if (this.getIdUser._id) {
      axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
        this.getIdUser.history = data.data.history;
        this.setUser.history = this.getProducts.concat(this.getIdUser.history);
        axios.put(`http://localhost:8088/api/user/${this.getIdUser._id}`, this.setUser).then(() => {
          localStorage.removeItem("cart");
          this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]")
          alert("Thanh toán thành công")
        });
      });
    } else {
      localStorage.removeItem("cart");
      this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]");
      alert("Thanh toán thành công")
    }
  }
}
