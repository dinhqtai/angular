import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { PeopleComponent } from './pages/admin/people/people.component';

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
PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
