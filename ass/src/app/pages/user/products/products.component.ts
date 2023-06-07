import { Component, EventEmitter } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  getProducts: any[] = [];
  products: any[] = [];
  pageSize: number = 8;
  pagination: number = 1;
  totalItems: number = 1;
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/products").then((data) => { 
      this.getProducts = data.data; 
      this.totalItems =  this.getProducts.length;
      this.products = this.getProducts.slice(0, this.pageSize);
     });
  }
  fetchProducts() {
    const startItem = (this.pagination - 1) * this.pageSize;
    const endItem =  this.pagination * this.pageSize;
    this.products = this.getProducts.slice(startItem, endItem);
  }
  pageChange(event: number) {
    this.pagination = event;
    this.fetchProducts();
  }
}