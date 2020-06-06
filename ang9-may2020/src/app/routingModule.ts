import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

const routes : Routes = [
  {path: 'cars', component: CarsComponent}
];

/**
 * TODO ... add routers..
 */
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
