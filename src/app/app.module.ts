import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderConfirmationComponent } from './client/pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './client/components/welcome-header/welcome-header.component';
import { ButtonsContainerComponent } from './client/pages/order-form/buttons-container/buttons-container.component';
import { HttpClientModule } from "@angular/common/http";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import { LoginFormComponent } from './admin/pages/login/login-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import { HomeComponent } from './client/pages/home/home.component';
import { FormsModule } from "@angular/forms";
import { OrderManagementComponent } from './admin/pages/order-management/order-management.component';
import { HomeAdminComponent } from './admin/pages/home/home.admin.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxCurrencyDirective} from "ngx-currency";

import { AdminHeaderComponent } from './admin/components/admin-header/admin-header.component';
import {TextFieldModule} from "@angular/cdk/text-field";

import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

import { OrderFormComponent } from './client/pages/order-form/order-form.component';
import { MenuComponent } from './client/pages/order-form/menu/menu.component';
import { HighlightBurgersComponent } from './client/pages/order-form/highlight-burgers/highlight-burgers.component';
import { OrderStatusComponent } from './client/pages/order-status/order-status.component';
import { AddOnListForManagementComponent } from './admin/pages/MenuManagement/add-ons-management/add-on-list-for-management/add-on-list-for-management.component';
import { AddOnsManagementComponent } from './admin/pages/MenuManagement/add-ons-management/add-ons-management.component';
import { CreateAddOnFormComponent } from './admin/pages/MenuManagement/add-ons-management/create-add-on-form/create-add-on-form.component';
import { BurgerManagementComponent } from './admin/pages/MenuManagement/burger-management/burger-management.component';
import { AddBreadFormComponent } from './admin/pages/MenuManagement/burger-management/forms/add-bread-form/add-bread-form.component';
import { AddBurgerFormComponent } from './admin/pages/MenuManagement/burger-management/forms/add-burger-form/add-burger-form.component';
import { AddCategoryFormComponent } from './admin/pages/MenuManagement/burger-management/forms/add-category-form/add-category-form.component';
import { AddIngredientFormComponent } from './admin/pages/MenuManagement/burger-management/forms/add-ingredient-form/add-ingredient-form.component';
import { BreadListForManagementComponent } from './admin/pages/MenuManagement/burger-management/lists/bread-list-for-management/bread-list-for-management.component';
import { BurgerListForManagementComponent } from './admin/pages/MenuManagement/burger-management/lists/burger-list-for-management/burger-list-for-management.component';
import { CategoryListForManagementComponent } from './admin/pages/MenuManagement/burger-management/lists/category-list-for-management/category-list-for-management.component';
import { IngredientListForManagementComponent } from './admin/pages/MenuManagement/burger-management/lists/ingredient-list-for-management/ingredient-list-for-management.component';
import { AddComboFormComponent } from './admin/pages/MenuManagement/combos-management/add-combo-form/add-combo-form.component';
import { ComboListForManagementComponent } from './admin/pages/MenuManagement/combos-management/combo-list-for-management/combo-list-for-management.component';
import { CombosManagementComponent } from './admin/pages/MenuManagement/combos-management/combos-management.component';
import { AddDrinkFormComponent } from './admin/pages/MenuManagement/drinks-management/add-drink-form/add-drink-form.component';
import { DrinkListForManagementComponent } from './admin/pages/MenuManagement/drinks-management/drink-list-for-management/drink-list-for-management.component';
import { DrinksManagementComponent } from './admin/pages/MenuManagement/drinks-management/drinks-management.component';
import { AddPortionFormComponent } from './admin/pages/MenuManagement/portions-management/add-portion-form/add-portion-form.component';
import { PortionListForManagementComponent } from './admin/pages/MenuManagement/portions-management/portion-list-for-management/portion-list-for-management.component';
import { PortionsManagementComponent } from './admin/pages/MenuManagement/portions-management/portions-management.component';
import { MenuHelperComponent } from './client/components/menu-helper/menu-helper.component';
import { OnAddOnChooseComponent } from './client/components/on-add-on-choose/on-add-on-choose.component';
import { OrderReviewComponent } from './client/pages/order-form/order-review/order-review.component';

registerLocaleData(localePtBr);
@NgModule({
  declarations: [
    AppComponent,
    OrderConfirmationComponent,
    WelcomeHeaderComponent,
    ButtonsContainerComponent,
    LoginFormComponent,
    NotFoundComponent,
    BurgerManagementComponent,
    HomeComponent,
    OrderManagementComponent,
    HomeAdminComponent,
    BurgerListForManagementComponent,
    PortionListForManagementComponent,
    DrinkListForManagementComponent,
    AddBurgerFormComponent,
    IngredientListForManagementComponent,
    AddIngredientFormComponent,
    AddCategoryFormComponent,
    AdminHeaderComponent,
    CategoryListForManagementComponent,
    AddPortionFormComponent,
    PortionsManagementComponent,
    DrinksManagementComponent,
    AddDrinkFormComponent,
    AddOnsManagementComponent,
    CreateAddOnFormComponent,
    AddOnListForManagementComponent,
    CombosManagementComponent,
    AddComboFormComponent,
    ComboListForManagementComponent,
    OrderFormComponent,
    MenuComponent,
    HighlightBurgersComponent,
    OrderStatusComponent,
    AddBreadFormComponent,
    BreadListForManagementComponent,
    MenuHelperComponent,
    OnAddOnChooseComponent,
    OrderReviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    NgxCurrencyDirective,
    TextFieldModule
  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
