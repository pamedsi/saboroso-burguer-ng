import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightsAndMenu } from './components/OrderForm/highlights-and-menu/highlights-and-menu';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/OrderForm/show-burgers-button/show-burgers-button.component';
import { SeparatorLineComponent } from './components/OrderForm/separator-line/separator-line.component';
import { ButtonsContainerComponent } from './components/OrderForm/buttons-container/buttons-container.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuBurgerComponent } from './components/OrderForm/menu-burger/menu-burger.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginFormComponent } from './pages/login/login-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from "@angular/forms";
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { ManagementComponent } from './pages/management/management.component';
import { BurgerListForManagementComponent } from './components/MenuManagement/burger-list-for-management/burger-list-for-management.component';
import { PortionListForManagementComponent } from './components/MenuManagement/portion-list-for-management/portion-list-for-management.component';
import { DrinkListForManagementComponent } from './components/MenuManagement/drink-list-for-management/drink-list-for-management.component';
import { AddBurgerFormComponent } from './components/MenuManagement/add-burger-form/add-burger-form.component';
import { IngredientListForManagementComponent } from './components/MenuManagement/ingredient-list-for-management/ingredient-list-for-management.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxCurrencyDirective} from "ngx-currency";
import { AddIngredientFormComponent } from './components/MenuManagement/add-ingredient-form/add-ingredient-form.component';
import { AddCategoryFormComponent } from './components/MenuManagement/add-category-form/add-category-form.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import {TextFieldModule} from "@angular/cdk/text-field";

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
    MenuManagementComponent,
    HomeComponent,
    OrderManagementComponent,
    ManagementComponent,
    BurgerListForManagementComponent,
    PortionListForManagementComponent,
    DrinkListForManagementComponent,
    AddBurgerFormComponent,
    IngredientListForManagementComponent,
    AddIngredientFormComponent,
    AddCategoryFormComponent,
    AdminHeaderComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
