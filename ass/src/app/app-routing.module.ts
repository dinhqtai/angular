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
import { PeopleComponent } from './pages/admin/people/people.component';
import { ListComponent } from './pages/admin/list/list.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'cart/:id',
        component: CartComponent,
      },
      { path: 'notfound', component: NotfoundComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin/:id',
    component: AdminComponent,
    children: [
      {
        path: 'admin/:id',
        component: IndexComponentAdmin,
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'people',
        component: PeopleComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
