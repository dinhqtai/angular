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
    name: "",
    price: "",
    desc: ""
  }
  ngOnInit(): void {
    const idProducts = this.route.snapshot.paramMap.get('id');
    axios.get(`http://localhost:8088/api/products/${idProducts}`).then((data) => this.getProducts = data.data);
  }
  addCart() {
    const idProducts = this.route.snapshot.paramMap.get('id');
    if (!idProducts) {
      alert("Dang nhap de thuc hien thuc nang")
    } else {
      axios.put(`http://localhost:8088/api/products/`, idProducts)
    }
  }
}
