import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/user/index/index.component';
import { DetailsComponent } from './pages/user/details/details.component';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/main/main.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { UpdateComponent } from './pages/admin/update/update.component';
import { AddComponent } from './pages/admin/add/add.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { ListComponent } from './pages/admin/list/list.component';
import { UserPeople } from './pages/admin/userpeople/userpeople.component';
import { HistoryUserComponent } from './pages/user/history-user/history-user.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { ProductsComponent } from './pages/user/products/products.component';
import { OutStockComponent } from './pages/admin/out-stock/out-stock.component';
import { DiscountComponent } from './pages/admin/discount/discount.component';
import { PostDiscountComponent } from './pages/admin/post-discount/post-discount.component';
import { UpdateDiscountComponent } from './pages/admin/update-discount/update-discount.component';
const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "details/:id",
        component: DetailsComponent,
      },
      {
        path: "products/details/:id",
        component: DetailsComponent,
      },
      {
        path: "cart",
        component: CartComponent,
      },
      {
        path: "history",
        component: HistoryUserComponent,
      },
      {
        path: "blog",
        component: BlogComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin/login",
    component: LoginAdminComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: "update/:idProduct",
        component: UpdateComponent
      },
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "people",
        component: UserPeople
      },
      {
        path: "outStock",
        component: OutStockComponent
      },
      {
        path: "discount",
        component: DiscountComponent
      },
      {
        path: "discount/Postdiscount",
        component: PostDiscountComponent
      },
      {
        path: "discount/update/:id",
        component: UpdateDiscountComponent
      }
    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
