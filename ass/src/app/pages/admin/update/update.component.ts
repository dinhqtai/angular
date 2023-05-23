import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/commom/model';
import { ActivatedRoute } from '@angular/router';

import axios from 'axios';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit{ 
  Product: IProduct = {
    _id:"",
    name: "",
    price: 0,
    desc: ""
  }
  constructor(
    private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
      const idProduct = this.route.snapshot.paramMap.get('id')
      axios
      .get(`http://localhost:8088/api/products/${idProduct}`)
      .then((data)=> this.Product = data.data
      )
    }
  submitForm() {
    axios
    .put(`http://localhost:8088/api/products/${idProduct}`)
    .then((data)=> this.Product = data.data
    )
  }
}
