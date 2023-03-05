import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeatTransferComponent } from './heat-transfer/heat-transfer.component';
import { ShellAndTubeComponent } from './shell-and-tube/shell-and-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeatTransferComponent,
    ShellAndTubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
