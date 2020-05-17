import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsFormComponent } from './cars/cars-form/cars-form.component';
import { CarsTableComponent } from './cars/cars-table/cars-table.component';
import { routingModule } from './routingModule';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsFormComponent,
    CarsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
