import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carsForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm() {
    this.carsForm = this.fb.group({

    });
  }

}
