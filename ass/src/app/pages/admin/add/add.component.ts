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
  Product = {  
    name: '',
    price: 0,
    desc: '',
  };
  constructor(private router: Router) {}
  submitForm() {
    
    axios
      .post('http://localhost:8088/api/products', this.Product)
      .then(() =>console.log(this.Product)
       )
      // .catch((error) => console.log(error));
      
  }
}
