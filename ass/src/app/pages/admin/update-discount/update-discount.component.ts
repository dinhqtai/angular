import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
interface Discount {
  _id: string
  name: string,
  price: number,
  discountCode: string,
  soLuong: number
}
@Component({
  selector: 'app-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrls: ['./update-discount.component.scss']
})
export class UpdateDiscountComponent implements OnInit {
  getDiscount: Discount = {
    _id: "",
    name: "",
    price: 0,
    discountCode: "",
    soLuong: 0
  }
  constructor(
    private router: ActivatedRoute,
    private link: Router
  ) { }
  ngOnInit(): void {
    const idDiscount = this.router.snapshot.paramMap.get("id");
    axios.get("http://localhost:8088/api/discount/" + idDiscount).then((data) => {
      this.getDiscount = data.data.DiscountCode
    })
  }
  submitForm(): void {
    const idDiscount = this.router.snapshot.paramMap.get("id");
    axios.put(`http://localhost:8088/api/discount/${idDiscount}`, this.getDiscount).then(() => { this.link.navigate([`/admin/discount`]); alert("Sửa mã giảm thành công") })
  }
}
