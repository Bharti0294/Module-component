import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { TravelComponent } from './header/travel/travel.component';
import { GroceryComponent } from './header/grocery/grocery.component';
import { MobileComponent } from './header/mobile/mobile.component';
import { TopoffersComponent } from './header/topoffers/topoffers.component';
import { TshirtComponent } from './men/tshirt/tshirt.component';
import { KurtasComponent } from './men/kurtas/kurtas.component';
import { BlazersComponent } from './men/blazers/blazers.component';
import { CasualshirtComponent } from './men/casualshirt/casualshirt.component';
import { FormalshirtComponent } from './men/formalshirt/formalshirt.component';
import { SareesComponent } from './women/sarees/sarees.component';
import { KurtisComponent } from './women/kurtis/kurtis.component';
import { GownComponent } from './women/gown/gown.component';
import { TopComponent } from './women/top/top.component';
import { JeansComponent } from './women/jeans/jeans.component';




const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'travel',component:TravelComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'mobile',component:MobileComponent},
  {path:'offers',component:TopoffersComponent},
  {path:'tshirt',component:TshirtComponent},
  {path:'kurtas',component:KurtasComponent},
  {path:'blazzer',component:BlazersComponent},
  {path:'casual',component:CasualshirtComponent},
  {path:'formal',component:FormalshirtComponent},
  {path:'sarees',component:SareesComponent},
  {path:'kurtis',component:KurtisComponent},
  {path:'top',component:TopComponent},
  {path:'gown',component:GownComponent},
  {path:'jeans',component:JeansComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
