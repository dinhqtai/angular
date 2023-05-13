import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderAdminComponent } from 'src/app/layout/header-admin/header-admin.component';
import { FooterAdminComponent } from 'src/app/layout/footer-admin/footer-admin.component';
@NgModule({
  declarations: [
    HeaderAdminComponent,
    FooterAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
