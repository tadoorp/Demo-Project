import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing/routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    RoutingModule,
    MaterialModule
    
  ],
  exports: [AddressComponent]
})
export class AddressModule { }
