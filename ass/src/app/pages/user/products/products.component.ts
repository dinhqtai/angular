import { Component } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  getProducts: any[] = [];
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/products").then((data) => { this.getProducts = data.data });
  }
}
