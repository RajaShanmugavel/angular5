import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeMainComponent,
    EmployeeTableComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}