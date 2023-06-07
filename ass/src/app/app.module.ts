import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './layout/main/main.component';
import { UserComponent } from './layout/user/user.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { UpdateComponent } from './pages/admin/update/update.component';
import { AddComponent } from './pages/admin/add/add.component';
import { IndexComponent } from './pages/user/index/index.component';
import { DetailsComponent } from './pages/user/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { ListComponent } from './pages/admin/list/list.component';
import { UserPeople } from './pages/admin/userpeople/userpeople.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryUserComponent } from './pages/user/history-user/history-user.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { ProductsComponent } from './pages/user/products/products.component';
import { OutStockComponent } from './pages/admin/out-stock/out-stock.component';
import { DiscountComponent } from './pages/admin/discount/discount.component';
import { PostDiscountComponent } from './pages/admin/post-discount/post-discount.component';
import { UpdateDiscountComponent } from './pages/admin/update-discount/update-discount.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    CartComponent,
    UpdateComponent,
    AddComponent,
    IndexComponent,
    DetailsComponent,
    NotfoundComponent,
    LoginAdminComponent,
    ListComponent,
    UserPeople,
    HistoryUserComponent,
    BlogComponent,
    ContactComponent,
    ProductsComponent,
    OutStockComponent,
    DiscountComponent,
    PostDiscountComponent,
    UpdateDiscountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
