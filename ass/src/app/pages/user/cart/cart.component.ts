import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getProducts = JSON.parse(localStorage.getItem("products") || "[]")
  }
  thanhToan() {
    if (this.getProducts.length) {
      localStorage.removeItem("products")
      window.location.reload()
      alert("Thanh toán thành công")
    }
  }
}
