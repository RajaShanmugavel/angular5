import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'vehicle', component: VehicleComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
