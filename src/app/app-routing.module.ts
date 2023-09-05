import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/login/login-form.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { MenuManagementComponent } from "./pages/menu-management/menu-management.component";
import { HomeComponent } from "./pages/home/home.component";
import { ManagementComponent } from "./pages/management/management.component";
import { OrderManagementComponent } from "./pages/order-management/order-management.component"

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
    path: 'management',
    component: ManagementComponent
  },
  {
    path: 'order-management',
    component: OrderManagementComponent
  },
  {
    path: 'menu-management',
    component: MenuManagementComponent
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
