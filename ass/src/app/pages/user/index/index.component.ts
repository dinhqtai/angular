import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';

@Component({
  selector: 'index-user',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  getProducts: any[] = [];
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/products").then((data) => { this.getProducts = data.data })
  }
}
