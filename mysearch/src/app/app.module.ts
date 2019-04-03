import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppComponent } from './app.component';
import { SearchMainComponent } from './search-main/search-main.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchTableComponent } from './search-table/search-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMainComponent,
    SearchFormComponent,
    SearchTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
