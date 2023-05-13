import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponentAdmin } from './pages/admin/index/index.component';
import { IndexComponent } from './pages/user/index/index.component';
import { DetailsComponent } from './pages/user/details/details.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "details",
    component: DetailsComponent
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
    path: "admin",
    component: IndexComponentAdmin,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
