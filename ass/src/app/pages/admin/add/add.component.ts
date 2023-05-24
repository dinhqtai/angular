import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  Product = {
    name: '',
    price: 0,
    desc: '',
  };
  idProducts = ""
  constructor(
    private link: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const idAdmin = this.router.snapshot.paramMap.get("id")
    console.log(idAdmin)

  }
  submitForm() {
    axios
      .post('http://localhost:8088/api/products', this.Product).then(() => this.link.navigate)
  }
}
