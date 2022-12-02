import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycomponent/navbar/navbar.component';
import { CarouselComponent } from './Mycomponent/carousel/carousel.component';
import { CardsComponent } from './Mycomponent/cards/cards.component';
import { HomeComponent } from './Mypage/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
