import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HelloSriComponent} from '../components/hello-sri/hello-sri.component';
import {AppRouteRoutes} from './app-route.routing';
@NgModule({
  declarations: [
    AppComponent,
    HelloSriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
