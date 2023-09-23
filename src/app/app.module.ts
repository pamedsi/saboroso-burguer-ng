import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightsAndMenu } from './components/group-components/OrderForm/highlights-and-menu/highlights-and-menu';
import { OrderConfirmationComponent } from './pages/ClientSide/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/single-components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/group-components/OrderForm/show-burgers-button/show-burgers-button.component';
import { SeparatorLineComponent } from './components/group-components/OrderForm/separator-line/separator-line.component';
import { ButtonsContainerComponent } from './components/group-components/OrderForm/buttons-container/buttons-container.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuBurgerComponent } from './components/group-components/OrderForm/menu-burger/menu-burger.component';
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import { LoginFormComponent } from './pages/AdminSide/login/login-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './components/single-components/not-found/not-found.component';
import { BurgerManagementComponent } from './pages/AdminSide/burger-management/burger-management.component';
import { HomeComponent } from './pages/ClientSide/home/home.component';
import { FormsModule } from "@angular/forms";
import { OrderManagementComponent } from './pages/AdminSide/order-management/order-management.component';
import { AdminComponent } from './pages/AdminSide/admin/admin.component';
import { BurgerListForManagementComponent } from './components/group-components/BurgersManagement/Lists/burger-list-for-management/burger-list-for-management.component';
import { PortionListForManagementComponent } from './components/group-components/PortionsManagement/portion-list-for-management/portion-list-for-management.component';
import { DrinkListForManagementComponent } from './components/group-components/DrinksManagement/drink-list-for-management/drink-list-for-management.component';
import { AddBurgerFormComponent } from './components/group-components/BurgersManagement/Forms/add-burger-form/add-burger-form.component';
import { IngredientListForManagementComponent } from './components/group-components/BurgersManagement/Lists/ingredient-list-for-management/ingredient-list-for-management.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxCurrencyDirective} from "ngx-currency";
import { AddIngredientFormComponent } from './components/group-components/BurgersManagement/Forms/add-ingredient-form/add-ingredient-form.component';
import { AddCategoryFormComponent } from './components/group-components/BurgersManagement/Forms/add-category-form/add-category-form.component';
import { AdminHeaderComponent } from './components/single-components/admin-header/admin-header.component';
import {TextFieldModule} from "@angular/cdk/text-field";
import { CategoryListForManagementComponent } from './components/group-components/BurgersManagement/Lists/category-list-for-management/category-list-for-management.component';
import { AddPortionFormComponent } from './components/group-components/PortionsManagement/add-portion-form/add-portion-form.component';
import { PortionsManagementComponent } from './pages/AdminSide/portions-management/portions-management.component';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { DrinksManagementComponent } from './pages/AdminSide/drinks-management/drinks-management.component';
import { AddDrinkFormComponent } from './components/group-components/DrinksManagement/add-drink-form/add-drink-form.component';
import { AddOnsManagementComponent } from './pages/AdminSide/add-ons-management/add-ons-management.component';

registerLocaleData(localePtBr);
@NgModule({
  declarations: [
    AppComponent,
    HighlightsAndMenu,
    OrderConfirmationComponent,
    WelcomeHeaderComponent,
    ShowBurgersButtonComponent,
    SeparatorLineComponent,
    ButtonsContainerComponent,
    MenuBurgerComponent,
    LoginFormComponent,
    NotFoundComponent,
    BurgerManagementComponent,
    HomeComponent,
    OrderManagementComponent,
    AdminComponent,
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
