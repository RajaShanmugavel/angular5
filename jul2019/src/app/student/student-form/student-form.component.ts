import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges
} from '@angular/core';
import { State } from './state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  isSubmitted = false;

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

  get formControls() {
    return this.studentForm.controls;
  }

  clear() {
    this.studentForm.reset();
  }

  createForm() {
    this.studentForm = this.fb.group({
      id: null,
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      state: [null, Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.studentForm.invalid) {
      return;
    }
    const val = this.studentForm.value;
    this.submittedStudent.emit(val);
  }
}
