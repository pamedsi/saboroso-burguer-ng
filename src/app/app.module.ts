import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderFromComponent } from './pages/order-from/order-from.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/show-burgers-button/show-burgers-button.component';
import { SeparatorLineComponent } from './components/separator-line/separator-line.component';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    OrderFromComponent,
    OrderConfirmationComponent,
    WelcomeHeaderComponent,
    ShowBurgersButtonComponent,
    SeparatorLineComponent,
    ButtonsContainerComponent,
    MenuBurgerComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
