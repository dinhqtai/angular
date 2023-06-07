import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';
import { number } from 'yup';
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
  putProducts = {
    soLuong: 0 as number
  }
  getSoLuong = {
    soLuong: 0 as number
  }
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
  xoa(id: string) {
    this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]")
    const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng không ?");
    if (isConfirm) {
      const getIdProducts = this.getProducts.filter(data => data._id != id)
      const idPutProducts = this.getProducts.filter(data => data._id === id)
      idPutProducts.map((dataCu) => {
        axios.get(`http://localhost:8088/api/products/${id}`).then((data) => {
          this.getSoLuong = data.data;
          this.putProducts.soLuong = dataCu.soLuong + this.getSoLuong.soLuong
          axios.put(`http://localhost:8088/api/products/${id}`, this.putProducts)
        })
      })
      localStorage.setItem('cart', JSON.stringify(getIdProducts));
      alert("Xóa thành công")
    }
    // window.location.reload()
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
