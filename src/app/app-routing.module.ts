import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./admin/pages/login/login-form.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { HomeComponent } from "./client/pages/home/home.component";
import { HomeAdminComponent } from "./admin/pages/home/home.admin.component";
import { OrderManagementComponent } from "./admin/pages/order-management/order-management.component"
import { canActivate } from "./shared/security/AuthGuardService";
import {OrderFormComponent} from "./client/pages/order-form/order-form.component";
import {OrderStatusComponent} from "./client/pages/order-status/order-status.component";
import {OrderConfirmationComponent} from "./client/pages/order-confirmation/order-confirmation.component";
import {BurgerManagementComponent} from "./admin/pages/MenuManagement/burger-management/burger-management.component";
import {DrinksManagementComponent} from "./admin/pages/MenuManagement/drinks-management/drinks-management.component";
import {PortionsManagementComponent} from "./admin/pages/MenuManagement/portions-management/portions-management.component";
import {AddOnsManagementComponent} from "./admin/pages/MenuManagement/add-ons-management/add-ons-management.component";
import {CombosManagementComponent} from "./admin/pages/MenuManagement/combos-management/combos-management.component";

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
    component: HomeAdminComponent,
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
    path: 'add-ons-management',
    component: AddOnsManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'combos-management',
    component: CombosManagementComponent,
    canActivate: [canActivate]
  },
  {
    path: 'order-form',
    component: OrderFormComponent
  },
  {
    path: 'order-status',
    component: OrderStatusComponent
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationComponent
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
