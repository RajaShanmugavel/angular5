import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './employee/register/register.component';
import { RegisterMainComponent } from './employee/register/register-main/register-main.component';
import { RegisterFormComponent } from './employee/register/register-form/register-form.component';
import { RegisterTableComponent } from './employee/register/register-table/register-table.component';

// Add all the necessary components here..
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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
