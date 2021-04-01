import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TshirtComponent } from './tshirt/tshirt.component';
import { KurtasComponent } from './kurtas/kurtas.component';
import { BlazersComponent } from './blazers/blazers.component';
import { CasualshirtComponent } from './casualshirt/casualshirt.component';
import { FormalshirtComponent } from './formalshirt/formalshirt.component';



@NgModule({
  declarations: [TshirtComponent, KurtasComponent, BlazersComponent, CasualshirtComponent, FormalshirtComponent],
  exports: [TshirtComponent, KurtasComponent, BlazersComponent, CasualshirtComponent, FormalshirtComponent],

  imports: [
    CommonModule
  ]
})
export class MenModule { }
