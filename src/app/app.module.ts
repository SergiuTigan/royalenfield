import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MotoComponent } from './components/moto/moto.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
