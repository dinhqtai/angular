import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { data } from 'autoprefixer';
import { number } from 'yup';

interface Product {
  _id: string;
  name: string;
  price: number;
  desc: string;
  images: string;
  soLuong: number
}
interface Cart {
  _id: string;
  name: string;
  price: number;
  images: string;
  soLuong: number
}
interface discountCode {
  _id: string;
  name: string;
  price: number;
  discountCode: string;
  soLuong: number;
  status: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  getProducts: Product = {
    _id: "",
    name: "",
    price: 0,
    desc: "",
    images: "",
    soLuong: 1
  };
  getCart: Cart = {
    _id: "",
    name: "",
    price: 0,
    images: "",
    soLuong: 1
  }
  putDiscountCode = {
    soLuong: 0 as number
  }
  setCart: Cart[] = [];
  getAllDiscountCode: discountCode[] = []
  getdiscountCode = ""
  getIdDiscountCode: discountCode[] = []
  getSoLuong: number = 1;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const idProducts = this.route.snapshot.paramMap.get('id');
    axios.get<Product>(`http://localhost:8088/api/products/${idProducts}`)
      .then((response) => {
        this.getProducts = response.data;

      });
  }

  addCart(): void {
    if (this.getProducts.soLuong - this.getSoLuong >= 0 && this.getSoLuong > 0) {
      if (this.getdiscountCode.length) {
        axios.get(`http://localhost:8088/api/discount`).then((data) => {
          this.getAllDiscountCode = data.data.DiscountCode;
          this.getIdDiscountCode = this.getAllDiscountCode.filter(data => data.discountCode === this.getdiscountCode)
          if (this.getIdDiscountCode.length) {
            this.getIdDiscountCode.map((data) => {
              this.getProducts.soLuong = this.getProducts.soLuong - this.getSoLuong
              // this.setCart = JSON.parse(localStorage.getItem('products') || '[]');
              this.getCart._id = this.getProducts._id
              this.getCart.name = this.getProducts.name
              if (this.getProducts.price - data.price < 1) {
                this.getCart.price = 0
              } else {
                this.getCart.price = this.getProducts.price - data.price
              }
              this.getCart.images = this.getProducts.images
              this.getCart.soLuong = this.getSoLuong
              this.setCart = JSON.parse(localStorage.getItem('cart') || '[]');
              const idProducts = this.route.snapshot.paramMap.get('id');
              const checkProductCart = this.setCart.filter(data => data._id === this.getCart._id)
              axios.put<Product>(`http://localhost:8088/api/products/${idProducts}`, this.getProducts)
              if (!checkProductCart.length) {
                this.setCart.push(this.getCart);
                localStorage.setItem('cart', JSON.stringify(this.setCart));
              } else {
                this.setCart.map((data) => {
                  data.soLuong = data.soLuong + this.getCart.soLuong
                })
                localStorage.setItem('cart', JSON.stringify(this.setCart));
              }
              if (data.soLuong - 1 >= 0) {
                this.putDiscountCode.soLuong = data.soLuong - 1
                axios.put<discountCode>(`http://localhost:8088/api/discount/${data._id}`, this.putDiscountCode)
                alert("Thêm sản phẩm vào giỏ hàng với mã ưu đãi thành công")
              } else {
                alert(`Mã ưu đãi không khả dụng !`);
              }

            })
          } else {
            alert(`Mã ưu đãi không tồn tại !`);
          }
        })
      }
      else {
        this.getProducts.soLuong = this.getProducts.soLuong - this.getSoLuong
        // this.setCart = JSON.parse(localStorage.getItem('products') || '[]');
        this.getCart._id = this.getProducts._id
        this.getCart.name = this.getProducts.name
        this.getCart.price = this.getProducts.price
        this.getCart.images = this.getProducts.images
        this.getCart.soLuong = this.getSoLuong
        this.setCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const checkProductCart = this.setCart.filter(data => data._id === this.getCart._id)
        const idProducts = this.route.snapshot.paramMap.get('id');
        axios.put<Product>(`http://localhost:8088/api/products/${idProducts}`, this.getProducts)
        if (checkProductCart.length) {
          this.setCart.filter(data => data._id === this.getCart._id).map((data) => {
            data.soLuong = data.soLuong + this.getCart.soLuong
          })
          localStorage.setItem('cart', JSON.stringify(this.setCart));
        } else {
          this.setCart.push(this.getCart);
          localStorage.setItem('cart', JSON.stringify(this.setCart));
        }
        alert("Thêm sản phẩm vào giỏ hàng thành công")
      }
    } else {
      alert(`Xảy ra lỗi ! Vui lòng thực hiện lại thao tác`)
    }
  }
}