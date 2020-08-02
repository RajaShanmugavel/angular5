import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Car } from './car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getAllCars();
  }

  handleSubmittedCar(car: Car) {
    this.cars.push(car);
    console.log('submitted Cars:' + this.cars);
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((res) => {
      this.cars = res;
    });
  }
}
