import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './employee/register/register.component';
import { RegisterMainComponent } from './employee/register/register-main/register-main.component';
import { RegisterFormComponent } from './employee/register/register-form/register-form.component';
import { RegisterTableComponent } from './employee/register/register-table/register-table.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { AccountMainComponent } from './account/account-main/account-main.component';
import { AccountTableComponent } from './account/account-table/account-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RegisterComponent,
    RegisterMainComponent,
    RegisterFormComponent,
    RegisterTableComponent,
    AccountComponent,
    AccountFormComponent,
    AccountMainComponent,
    AccountTableComponent
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
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
