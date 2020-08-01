import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

   constructor() { }

  ngOnInit(): void {
  }

  handleSubmittedCar(car: Car){
    this.cars.push(car);
    console.log('submitted Cars:' + this.cars);
  }

}
