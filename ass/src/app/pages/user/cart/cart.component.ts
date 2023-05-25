import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  getProducts = {
    _id: "",
    price: "",
    name: "",
    images: ""
  }

  ngOnInit(): void {
    var products = localStorage.getItem("products");
    if (products !== null) {
      this.getProducts = JSON.parse(products)
    }
  }
  thanhToan() {
    localStorage.removeItem("products")
    window.location.reload()
  }
}
