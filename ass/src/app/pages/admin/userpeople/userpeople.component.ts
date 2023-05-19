import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-user',
  templateUrl: './userpeople.component.html',
  styleUrls: ['./userpeople.component.scss']
})
export class UserPeople implements OnInit {
getUser: any[]=[];
ngOnInit(): void {
  axios.get("http://localhost:8088/api/user").then((data)=>{this.getUser =data.data})
}
}
