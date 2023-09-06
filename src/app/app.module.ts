import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightsAndMenu } from './components/highlights-and-menu/highlights-and-menu';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/show-burgers-button/show-burgers-button.component';
import { SeparatorLineComponent } from './components/separator-line/separator-line.component';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginFormComponent } from './pages/login/login-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from "@angular/forms";
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { ManagementComponent } from './pages/management/management.component';
import { BurgerListForManagementComponent } from './components/burger-list-for-management/burger-list-for-management.component';
import { PortionListForManagementComponent } from './components/portion-list-for-management/portion-list-for-management.component';
import { DrinkListForManagementComponent } from './components/drink-list-for-management/drink-list-for-management.component';

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
    DrinkListForManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
