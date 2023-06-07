import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './userpeople.component.html',
  styleUrls: ['./userpeople.component.scss']
})

export class UserPeople implements OnInit {
getUser: any[]=[];
searchTerm: string = ""

ngOnInit(): void {
  axios.get("http://localhost:8088/api/users").then((data)=>{this.getUser =data.data})
}
search() {
  if (this.searchTerm !== '') {
    this.getUser = this.getUser.filter((data) =>
    data.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  ) 
    // Tải lại trang
    setTimeout(function() {
      location.reload();
    }, 3000);
  }
}


UserDelete(id: string): void {
  const isConfirm = confirm("ban co chắc xóa sản phẩm này không");
  if(isConfirm) {
    this.getUser = this.getUser.filter(user =>  user._id != id);
    axios.delete(`http://localhost:8088/api/users/`+ id).then(() => alert("Bạn xóa thành công"));
  }
}
}
