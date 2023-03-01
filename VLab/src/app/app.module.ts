import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RotaryDryerComponent } from './mass-transfer/rotary-dryer/rotary-dryer.component';
import { FluidMechanicsComponent } from './fluid-mechanics/fluid-mechanics.component';
import { MassTransferComponent } from './mass-transfer/mass-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RotaryDryerComponent,
    FluidMechanicsComponent,
    MassTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
