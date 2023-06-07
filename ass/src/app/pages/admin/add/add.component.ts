import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  Product = {
    name: '',
    images: '',
    soLuong: 1,
    price: 0,
    desc: '',
  };
  constructor(
    private link: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder,
  ) { }
    inforProduct = this.fb.group({
      "name":["", Validators.required],
      "price":[0, Validators.required],
      "soLuong":[1, Validators.required],
      "desc":["", Validators.required],
      "img":[""],
    })
    get f(){
      return this.inforProduct.controls
    }
  ngOnInit(): void {
    const idAdmin = this.router.snapshot.paramMap.get("id")
    console.log(idAdmin)

  }
  submitForm() {
    axios
      .post('http://localhost:8088/api/products', this.Product).then(() => this.link.navigate([`admin/`]))
  }
}
