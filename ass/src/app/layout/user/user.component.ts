import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  getProducts = {
    name: "",
  }
  constructor(
    private dataService: DataService
  ) { }
  ngOnInit(): void {
    this.dataService.dataUpdated.subscribe((newData) => console.log(newData))
  }
}
