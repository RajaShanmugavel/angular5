import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmittedCar(car: Car){
    console.log('submitted Car:' + car);
  }

}
