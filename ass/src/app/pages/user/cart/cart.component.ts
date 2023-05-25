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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  getProducts: Product[] = []
  getIdUser = {
    _id: "",
    history: [] as Product[]
  }
  setUser = {
    history: [] as Product[]
  }
  ngOnInit(): void {
    this.getProducts = JSON.parse(localStorage.getItem("products") || "[]")
  }
  thanhToan() {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
      this.getIdUser.history = data.data.history;
      this.setUser.history = this.getProducts.concat(this.getIdUser.history);
      axios.put(`http://localhost:8088/api/user/${this.getIdUser._id}`, this.setUser);
    });
    if (this.getProducts.length) {
      localStorage.removeItem("products")
    }
  }
}
