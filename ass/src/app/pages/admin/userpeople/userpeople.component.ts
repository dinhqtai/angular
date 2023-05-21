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
UserDelete(id: string): void {
  const isConfirm = confirm("ban co chắc xóa sản phẩm này không");
  if(isConfirm) {
    this.getUser = this.getUser.filter(user =>  user._id != id);
    axios.delete(`http://localhost:8088/api/user/`+ id).then(() => alert("Bạn xóa thành công"));
  }
}
}
