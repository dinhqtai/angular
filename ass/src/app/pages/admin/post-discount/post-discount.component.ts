import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
interface Discount {
  name: string,
  price: number,
  discountCode: string,
  soLuong: number
}
@Component({
  selector: 'app-post-discount',
  templateUrl: './post-discount.component.html',
  styleUrls: ['./post-discount.component.scss']
})
export class PostDiscountComponent {
  postDiscount: Discount = {
    name: "",
    price: 1,
    discountCode: "",
    soLuong: 1
  }
  constructor(
    private router: Router
  ) { }
  submitForm(): void {
    axios.post(`http://localhost:8088/api/discount`, this.postDiscount).then(() => this.router.navigate([`/admin/discount`]))
  }
}
