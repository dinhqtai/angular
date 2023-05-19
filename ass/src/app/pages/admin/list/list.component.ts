import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  getProducts: any[] = [];
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/products").then((data) => { this.getProducts = data.data })
  }

}
