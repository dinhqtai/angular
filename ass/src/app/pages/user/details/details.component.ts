import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }
  getProducts: any = {
    _id: "",
    name: "",
    price: "",
    desc: "",
    images: ""
  }
  setCart = []
  itemCart = []
  ngOnInit(): void {
    const idProducts = this.route.snapshot.paramMap.get('id');
    axios.get(`http://localhost:8088/api/products/${idProducts}`).then((data) => this.getProducts = data.data);

  }
  addCart() {
    localStorage.setItem("products", JSON.stringify(this.getProducts))
    var products = localStorage.getItem("products")
    if (products !== null) {
      this.itemCart = JSON.parse(products)
    }
  }
} 
