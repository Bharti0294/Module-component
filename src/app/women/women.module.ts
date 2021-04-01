import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SareesComponent } from './sarees/sarees.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { GownComponent } from './gown/gown.component';
import { TopComponent } from './top/top.component';
import { JeansComponent } from './jeans/jeans.component';



@NgModule({
  declarations: [SareesComponent, KurtisComponent, GownComponent, TopComponent, JeansComponent],
  exports: [SareesComponent, KurtisComponent, GownComponent, TopComponent, JeansComponent],

  imports: [
    CommonModule
  ]
})
export class WomenModule { }
