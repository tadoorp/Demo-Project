import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayMapComponent } from '../display-map/display-map.component';
import { AddressComponent } from '../address/address.component';
import { AddressDetailComponent } from '../address-detail/address-detail.component';


const routes: Routes = [
  {path:'map', component:DisplayMapComponent },
  {path:'address', component:AddressComponent},
  {path:'address/:id', component:AddressDetailComponent},
  {path:'', redirectTo:'address', pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
