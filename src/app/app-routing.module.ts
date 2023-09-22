import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/AdminSide/login/login-form.component";
import { NotFoundComponent } from "./components/single-components/not-found/not-found.component";
import { BurgerManagementComponent } from "./pages/AdminSide/burger-management/burger-management.component";
import { HomeComponent } from "./pages/ClientSide/home/home.component";
import { AdminComponent } from "./pages/AdminSide/admin/admin.component";
import { OrderManagementComponent } from "./pages/AdminSide/order-management/order-management.component"
import { canActivate } from "./services/AuthGuardService";
import {PortionsManagementComponent} from "./pages/AdminSide/portions-management/portions-management.component";
import {DrinksManagementComponent} from "./pages/AdminSide/drinks-management/drinks-management.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [canActivate]
  },
  {
    path: 'orders-management',
    component: OrderManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'burgers-management',
    component: BurgerManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'drinks-management',
    component: DrinksManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'portions-management',
    component: PortionsManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
