import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMapComponent } from 'src/app/display-map/display-map.component';
import { AgmCoreModule } from '@agm/core';
import { RoutingModule } from '../routing/routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [DisplayMapComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyDsFauI83Lx48O6duaH6r8ueZt_f9dIdeo'}),
    
  ],
  exports: [DisplayMapComponent]
})
export class DisplayMapModule { }
