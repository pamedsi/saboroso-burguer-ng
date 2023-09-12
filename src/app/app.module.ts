import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightsAndMenu } from './components/group-components/OrderForm/highlights-and-menu/highlights-and-menu';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/single-components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/group-components/OrderForm/show-burgers-button/show-burgers-button.component';
import { SeparatorLineComponent } from './components/group-components/OrderForm/separator-line/separator-line.component';
import { ButtonsContainerComponent } from './components/group-components/OrderForm/buttons-container/buttons-container.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuBurgerComponent } from './components/group-components/OrderForm/menu-burger/menu-burger.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginFormComponent } from './pages/login/login-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './components/single-components/not-found/not-found.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from "@angular/forms";
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { ManagementComponent } from './pages/management/management.component';
import { BurgerListForManagementComponent } from './components/group-components/MenuManagement/Lists/burger-list-for-management/burger-list-for-management.component';
import { PortionListForManagementComponent } from './components/group-components/MenuManagement/Lists/portion-list-for-management/portion-list-for-management.component';
import { DrinkListForManagementComponent } from './components/group-components/MenuManagement/Lists/drink-list-for-management/drink-list-for-management.component';
import { AddBurgerFormComponent } from './components/group-components/MenuManagement/Forms/add-burger-form/add-burger-form.component';
import { IngredientListForManagementComponent } from './components/group-components/MenuManagement/Lists/ingredient-list-for-management/ingredient-list-for-management.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxCurrencyDirective} from "ngx-currency";
import { AddIngredientFormComponent } from './components/group-components/MenuManagement/Forms/add-ingredient-form/add-ingredient-form.component';
import { AddCategoryFormComponent } from './components/group-components/MenuManagement/Forms/add-category-form/add-category-form.component';
import { AdminHeaderComponent } from './components/single-components/admin-header/admin-header.component';
import {TextFieldModule} from "@angular/cdk/text-field";
import { CategoryListForManagementComponent } from './components/group-components/MenuManagement/Forms/category-list-for-management/category-list-for-management.component';

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
    CategoryListForManagementComponent,
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
