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
import { LoginComponent } from './pages/login-form/login-form.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { HomeComponent } from './pages/home/home.component';

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
    LoginComponent,
    NotFoundComponent,
    MenuManagementComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgOptimizedImage,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
