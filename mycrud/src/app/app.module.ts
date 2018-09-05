import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './employee/register/register.component';
import { RegisterMainComponent } from './employee/register/register-main/register-main.component';
import { RegisterFormComponent } from './employee/register/register-form/register-form.component';
import { RegisterTableComponent } from './employee/register/register-table/register-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RegisterComponent,
    RegisterMainComponent,
    RegisterFormComponent,
    RegisterTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
