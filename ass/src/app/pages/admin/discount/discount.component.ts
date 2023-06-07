import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';
interface Discount {
  _id: string
  name: string,
  price: number,
  discountCode: string,
  soLuong: number
}
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  getDiscount: Discount[] = []
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/discount").then((data) => { this.getDiscount = data.data.DiscountCode })
  }
  btnDelete(id: string): void {
    const isConfirm = confirm("Bạn có chắc muốn xóa không");
    if (isConfirm) {
      this.getDiscount = this.getDiscount.filter(product => product._id != id);
      axios.delete(`http://localhost:8088/api/discount/` + id).then(() => alert("Xóa thành công"))
    }
  }
}
