import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  Product = {
    name: '',
    soLuong: 0,
    images: '',
    price: 0,
    desc: '',
  };
  idProducts = "";

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  constructor(
    private link: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const idAdmin = this.router.snapshot.paramMap.get("id")
    console.log(idAdmin)

  }
  submitForm() {
    axios
      .post('http://localhost:8088/api/products', this.Product).then(() => this.link.navigate([`admin/`]))
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }
  handleInputChange(e: any) {
    console.log("input change")
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    console.log("_handleReaderLoaded")
    var reader = e.target;
    this.imageSrc = reader.result;
    this.Product.images = reader.result;
    this.loaded = true;
  }

}
