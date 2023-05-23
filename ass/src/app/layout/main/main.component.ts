import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminComponent implements OnInit {
  getAdmin = {
    name: "",
    email: ""
  }
  constructor(
    private router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const idAdmin = this.router.snapshot.paramMap.get("id");
    axios.get(`http://localhost:8088/api/admin/${idAdmin}`).then((data) => this.getAdmin = data.data);
  }
}
