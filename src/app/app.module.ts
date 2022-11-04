import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'


import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

import {MatButtonModule} from '@angular/material/button'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
