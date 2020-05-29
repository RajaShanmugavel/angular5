import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css'],
})
export class CarsFormComponent implements OnInit {
  carsForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  /**
   * init() method calling createForm()
   *  */
  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm() method called during init()
   */
  createForm() {
    this.carsForm = this.fb.group({
      id: null,
      make: null,
      model: null,
      engine: {
        size: null,
        cylinders: null,
        inline: null,
        compress: null,
        build: null,
      },
      doors: null,
      drive: null,
      gearbox: {
        type: null,
        gears: null,
      },
    });
  }
}
