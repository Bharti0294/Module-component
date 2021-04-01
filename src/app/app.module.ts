import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MenModule } from './men/men.module';
import { WomenModule } from './women/women.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MenModule,
    WomenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
