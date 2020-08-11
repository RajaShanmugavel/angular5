import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css'],
})
export class CarsFormComponent implements OnInit {
  carsForm: FormGroup;

  @Output()
  submittedCar = new EventEmitter<Car>();

  constructor(private fb: FormBuilder) {}
  /**
   * init() method calling createForm()
   *
   *
   */
  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm() method called during init()
   */
  createForm() {
    this.carsForm = new FormGroup({
      id: new FormControl(''),
      make: new FormControl(''),
      model: new FormControl(''),
      engine: new FormGroup({
        size: new FormControl(''),
        cylinders: new FormControl(''),
        inline: new FormControl(''),
        compress: new FormControl(''),
        build: new FormControl(''),
      }),
      doors: new FormControl(''),
      drive: new FormControl(''),
      gearbox: new FormGroup({
        gtype: new FormControl(''),
        gears: new FormControl(''),
      }),
    });
  }

  /**
   * onSubmit() on clicking submit from Form
   */
  onSubmit() {
    const val = this.carsForm.value;
    this.submittedCar.emit(val);
  }
}
