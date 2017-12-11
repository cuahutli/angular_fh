import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';

//Servicios
import { PeliculasService } from "./services/peliculas.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , HttpModule
    , JsonpModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
