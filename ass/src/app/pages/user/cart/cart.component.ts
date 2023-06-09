import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import axios from 'axios';
import { number, string } from 'yup';
interface Cart {
  _id: string;
  name: string;
  price: number;
  images: string;
  soLuong: number
}
interface IdCart {
  _id: string;
  soLuong: number;
  price: number
}
interface IdProducts {
  _id: string
  name: string
  images: string
  soLuong: number;
  price: number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  putProducts = {
    soLuong: 0 as number
  }
  getSoLuong = {
    soLuong: 0 as number
  }
  getTongPrice: number = 0
  tongAll: number = 0
  getProducts: Cart[] = []
  getIdUser = {
    _id: "",
    history: [] as Cart[]
  }
  setUser = {
    history: [] as Cart[]
  }
  deleteCart = {
    cart: []
  }
  Products: IdProducts[] = []
  getCartnew: Cart = {
    _id: "",
    name: "",
    price: 0,
    images: "",
    soLuong: 0
  }
  getCartUser: IdCart[] = [];
  putCart = {
    Cart: [] as Cart[]
  }
  tongSoLuong = 0;
  ngOnInit(): void {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    if (this.getIdUser._id) {
      axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
        this.getCartUser = data.data.cart;
        if (this.getCartUser) {
          this.getCartUser.map((data) => {
            axios.get(`http://localhost:8088/api/cart/${data._id}`).then((res) => {
              this.Products = res.data.Cart
              this.getProducts.concat(this.Products)
              this.Products.map((dataId) => {
                axios.get(`http://localhost:8088/api/products/${dataId._id}`).then((ress) => {
                  this.getCartnew._id = dataId._id
                  this.getCartnew.name = dataId.name
                  this.getCartnew.price = dataId.price
                  this.getCartnew.images = dataId.images
                  this.getCartnew.soLuong = dataId.soLuong
                  // this.getProducts.push(this.getCartnew)
                  console.log(dataId.soLuong);
                  const checkProducts = this.getProducts.filter(data => data._id === dataId._id)
                  console.log(checkProducts);
                  if (checkProducts.length) {
                    this.getProducts.filter(data => data._id === dataId._id).map((data) => {
                      this.tongSoLuong = dataId.soLuong + data.soLuong
                    })
                    localStorage.setItem('cart', JSON.stringify(this.getProducts));
                    this.putCart.Cart = this.getProducts
                    axios.put(`http://localhost:8088/api/cart/${data._id}`, this.putCart).then((data) => {
                      console.log(data);
                    })
                  } else {
                    this.getProducts.push(this.getCartnew)
                    localStorage.setItem('cart', JSON.stringify(this.getProducts));
                    this.putCart.Cart = this.getProducts
                    axios.put(`http://localhost:8088/api/cart/${data._id}`, this.putCart).then((data) => {
                      console.log(data);
                    })
                  }
                  this.getProducts.map((data) => {
                    this.getTongPrice = data.price * data.soLuong;
                    this.tongAll += this.getTongPrice;
                  });
                })
              })
            })
          })
        } else {
          console.log("ngu");

        }
      }
      )
    } else {
      this.getProducts.map((data) => {
        this.getTongPrice = data.price * data.soLuong;
        this.tongAll += this.getTongPrice;
      });
    }

  }
  xoa(id: string) {
    this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]")
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng không ?");
    if (isConfirm) {
      const getIdProducts = this.getProducts.filter(data => data._id != id)
      const idPutProducts = this.getProducts.filter(data => data._id === id)
      idPutProducts.map((dataCu) => {
        axios.get(`http://localhost:8088/api/products/${id}`).then((data) => {
          this.getSoLuong = data.data;
          this.putProducts.soLuong = dataCu.soLuong + this.getSoLuong.soLuong
          axios.put(`http://localhost:8088/api/products/${id}`, this.putProducts)
        })
      })
      axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
        this.getCartUser = data.data.cart;
        this.getCartUser.map((data) => {
          this.putCart.Cart = getIdProducts
          axios.put(`http://localhost:8088/api/cart/${data._id}`, this.putCart).then((data) => {
            console.log(data);
          })
        })
      })
      localStorage.setItem('cart', JSON.stringify(getIdProducts));
      alert("Xóa thành công")
    }
    // window.location.reload()
  }
  thanhToan() {
    this.getIdUser = JSON.parse(localStorage.getItem("user") || "[]")
    if (this.getIdUser._id) {
      axios.get(`http://localhost:8088/api/user/${this.getIdUser._id}`).then((data) => {
        this.getIdUser.history = data.data.history;
        this.setUser.history = this.getProducts.concat(this.getIdUser.history);
        axios.put(`http://localhost:8088/api/user/${this.getIdUser._id}`, this.deleteCart)
        axios.put(`http://localhost:8088/api/user/${this.getIdUser._id}`, this.setUser).then((data) => {
          localStorage.removeItem("cart");
          this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]")
          alert("Thanh toán thành công")
        });
      });
    } else {
      localStorage.removeItem("cart");
      this.getProducts = JSON.parse(localStorage.getItem("cart") || "[]");
      alert("Thanh toán thành công")
    }
  }
}
