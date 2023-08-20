import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderFromComponent } from './pages/order-from/order-from.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ShowBurgersButtonComponent } from './components/show-burgers-button/show-burgers-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderFromComponent,
    OrderConfirmationComponent,
    WelcomeHeaderComponent,
    ShowBurgersButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
