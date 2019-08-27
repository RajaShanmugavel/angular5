import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclevehicleFormComponent } from './vehiclevehicle-form/vehiclevehicle-form.component';
import { VehicleFormComponent } from './vehicle/vehicle-form/vehicle-form.component';
import { VehicleTableComponent } from './vehicle/vehicle-table/vehicle-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentTableComponent,
    StudentFormComponent,
    VehicleComponent,
    VehiclevehicleFormComponent,
    VehicleFormComponent,
    VehicleTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
