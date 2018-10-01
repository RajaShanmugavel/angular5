import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
