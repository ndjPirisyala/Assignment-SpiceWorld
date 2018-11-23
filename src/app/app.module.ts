import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    FooterComponent,
    LoginComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
