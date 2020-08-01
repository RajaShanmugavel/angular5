import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './cars/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  APP_URL = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.APP_URL);
  }
}
