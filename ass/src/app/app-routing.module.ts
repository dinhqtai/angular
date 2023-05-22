import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponentAdmin } from './pages/admin/index/index.component';
import { IndexComponent } from './pages/user/index/index.component';
import { DetailsComponent } from './pages/user/details/details.component';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/main/main.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { UpdateComponent } from './pages/admin/update/update.component';
import { AddComponent } from './pages/admin/add/add.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        component: IndexComponent,
        pathMatch: "full"
      },
      {
        path: "details/:id",
        component: DetailsComponent,
      },
      {
        path: "cart/:id",
        component: CartComponent,
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
    path: "admin/:id",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: IndexComponentAdmin
      },
      {
        path: "update/:id",
        component: UpdateComponent
      },
      {
        path: "add",
        component: AddComponent
      },
    ],
  },
  { path: '**', redirectTo: '/notfound' },
  { path: 'notfound', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
