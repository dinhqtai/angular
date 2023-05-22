import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'autoprefixer';
import axios from 'axios';
@Component({
  selector: 'index-admin',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponentAdmin implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private link: Router
  ) { }
  ngOnInit(): void {
    const adminId = this.route.snapshot.paramMap.get("id");
    axios.get(`http://localhost:8088/api/admin/${adminId}`).catch((data) => {
      if (data) {
        this.link.navigate(['/admin/login'])
      }
    })
  }
}
