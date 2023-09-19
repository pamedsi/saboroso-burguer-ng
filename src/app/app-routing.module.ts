import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/login/login-form.component";
import { NotFoundComponent } from "./components/single-components/not-found/not-found.component";
import { BurgerManagementComponent } from "./pages/burger-management/burger-management.component";
import { HomeComponent } from "./pages/home/home.component";
import { ManagementComponent } from "./pages/management/management.component";
import { OrderManagementComponent } from "./pages/order-management/order-management.component"
import { canActivate } from "./services/AuthGuardService";

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
    component: ManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'order-management',
    component: OrderManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'burger-management',
    component: BurgerManagementComponent,
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
