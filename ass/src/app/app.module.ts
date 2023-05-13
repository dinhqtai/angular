import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './layout/header-user/header.component';
import { FooterComponent } from './layout/footer-user/footer.component';
import { FooterAdminComponent } from './layout/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    FooterAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
