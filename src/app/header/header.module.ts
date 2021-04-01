import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { GroceryComponent } from './grocery/grocery.component';
import { MobileComponent } from './mobile/mobile.component';
import { TopoffersComponent } from './topoffers/topoffers.component';



@NgModule({
  declarations: [HomeComponent, TravelComponent, GroceryComponent, MobileComponent, TopoffersComponent],
  exports: [HomeComponent, TravelComponent, GroceryComponent, MobileComponent, TopoffersComponent],

  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
