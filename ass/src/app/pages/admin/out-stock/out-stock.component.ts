import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'autoprefixer';
import axios from 'axios';
@Component({
  selector: 'app-out-stock',
  templateUrl: './out-stock.component.html',
  styleUrls: ['./out-stock.component.scss']
})
export class OutStockComponent implements OnInit {
  getProducts: any[] = [];
  getId = {
    _id: ""
  }
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    axios.get("http://localhost:8088/api/products").then((data) => {
      this.getProducts = data.data;
    })
  }
  btnDelete(id: string): void {
    const isConfirm = confirm("ban co chắc xóa sản phẩm này không");
    if (isConfirm) {
      this.getProducts = this.getProducts.filter(product => product._id != id);
      axios.delete(`http://localhost:8088/api/products/` + id).then(() => alert("Bạn xóa thành công"));
    }
  }
}
