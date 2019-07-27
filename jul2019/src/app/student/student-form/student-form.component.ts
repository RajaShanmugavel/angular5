import { Component, OnInit } from '@angular/core';
import { State } from './state';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  states: State[] = [
    { value: 'NSW', viewValue: 'New South Wales' },
    { value: 'VIC', viewValue: 'Victoria' },
    { value: 'QLD', viewValue: 'Queensland' }
  ];

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        state: null
    });
  }
}
