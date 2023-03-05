import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RotaryDryerComponent } from './mass-transfer/rotary-dryer/rotary-dryer.component';
import { FluidMechanicsComponent } from './fluid-mechanics/fluid-mechanics.component';
import { MassTransferComponent } from './mass-transfer/mass-transfer.component';
import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering/chemical-rection-engineering.component';
import { SemiBatchComponent } from './semi-batch/semi-batch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RotaryDryerComponent,
    FluidMechanicsComponent,
    MassTransferComponent,
    ChemicalRectionEngineeringComponent,
    SemiBatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
