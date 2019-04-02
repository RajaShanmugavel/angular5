import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';

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
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
