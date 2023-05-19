import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) { }
  getProducts: any = {
    name: "",
  }
  ngOnInit(): void {
    const idProducts = this.route.snapshot.paramMap.get('id');
    // axios.get(`http://localhost:8088/api/user/${idProducts}`).then((data) => { this.getProducts = data.data; console.log(this.getProducts) });
  }
}
