import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges
} from '@angular/core';
import { State } from './state';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {
  states: State[] = [
    { value: 'NSW', viewValue: 'New South Wales' },
    { value: 'VIC', viewValue: 'Victoria' },
    { value: 'QLD', viewValue: 'Queensland' }
  ];

  studentForm: FormGroup;
  students: Student[];

  @Input()
  editStudent: Student;

  @Output()
  submittedStudent = new EventEmitter<Student>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    if (this.editStudent) {
      this.studentForm.setValue({
        id: this.editStudent.id,
        firstName: this.editStudent.firstName,
        lastName: this.editStudent.lastName,
        email: this.editStudent.email,
        state: this.editStudent.state
      });
    }
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
