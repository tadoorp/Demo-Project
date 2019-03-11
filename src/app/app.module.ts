import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DisplayMapModule } from './display-map/display-map.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressModule } from './address/address.module';
import { RoutingModule } from './routing/routing.module';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddressDetailComponent
  ],
  imports: [
    BrowserModule,
    DisplayMapModule,
    AddressModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
