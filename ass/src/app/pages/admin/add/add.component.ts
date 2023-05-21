import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { Product, IProduct } from 'src/app/commom/model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  Product: IProduct = {
    name: '',
    price: 0,
    description: '',
  };
  constructor(private router: Router) {}
  submitForm() {
    axios
      .post('http://localhost:8088/api/products', this.Product)
      .then(() => this.router.navigate(['/list']))
      .catch((error) => console.log(error));
  }
}
