import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { State } from './state';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from '../student';

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
  students: Student[];

  @Output()
  submittedStudent = new EventEmitter<Student>();

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

  onSubmit() {
    const val = this.studentForm.value;
    this.submittedStudent.emit(val);
  }
}
