import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as PlotlyJS from 'plotly.js-dist-min';
// import { PlotlyModule } from 'angular-plotly.js';
// PlotlyModule.plotlyjs = PlotlyJS;

import { PlotlyViaWindowModule } from 'angular-plotly.js';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotlyComponent } from './plotly/plotly.component';

@NgModule({
  declarations: [AppComponent, PlotlyComponent],
  imports: [BrowserModule, AppRoutingModule, PlotlyViaWindowModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
