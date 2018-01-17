import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { Component1Component } from './component1/component1.component';

import { ServicenameService } from './servicename.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component1Component,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
