import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NextPageComponent} from '../components/next-page/next-page.component';
import { AppComponent } from './app.component';
import {HelloSriComponent} from '../components/hello-sri/hello-sri.component';
import {AppRouteRoutes} from './app-route.routing';
@NgModule({
  declarations: [
    AppComponent,
    HelloSriComponent,
    NextPageComponent
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
