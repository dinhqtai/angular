import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  getUser: any[]=[];
  ngOnInit(): void {
    axios.get("http://localhost:8088/api/user").then((data)=>{this.getUser =data.data})
  }
}

