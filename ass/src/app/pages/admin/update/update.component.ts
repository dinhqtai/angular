import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/commom/model';
import { ActivatedRoute, Router } from '@angular/router';

import axios from 'axios';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  Product = {
    _id: "",
    images:'',
    name: "",
    price: 0,
    desc: ""
  }
  idAdmin = ""
  constructor(
    private route: ActivatedRoute,
    private link: Router
  ) { }
  ngOnInit(): void {
    const idProduct = this.route.snapshot.paramMap.get('idProduct')
    const idAdmin = this.route.snapshot.paramMap.get("id")
    console.log(idAdmin);
    axios
      .get(`http://localhost:8088/api/products/${idProduct}`)
      .then((data) => this.Product = data.data
      )
  }
  submitForm() {
    axios.put(`http://localhost:8088/api/products/${this.Product._id}`, this.Product).then(() => { this.link.navigate([`admin/`]) })
  }
}
