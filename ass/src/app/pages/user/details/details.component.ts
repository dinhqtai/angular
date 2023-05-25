import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

interface Product {
  _id: string;
  name: string;
  price: string;
  desc: string;
  images: string;
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
    price: "",
    desc: "",
    images: ""
  };
  setCart: Product[] = [];
  itemCart: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idProducts = this.route.snapshot.paramMap.get('id');
    axios.get<Product>(`http://localhost:8088/api/products/${idProducts}`)
      .then((response) => {
        this.getProducts = response.data;
      });
  }

  addCart(): void {
    this.itemCart = JSON.parse(localStorage.getItem("products") || "[]");
    this.itemCart.push(this.getProducts);
    localStorage.setItem("products", JSON.stringify(this.itemCart));
  }
}