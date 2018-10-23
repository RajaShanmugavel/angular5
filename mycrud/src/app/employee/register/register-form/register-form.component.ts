import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Employee } from '../../employee';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  employee: Employee = new Employee();

  @Output()
  updatedEmployee = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  /**
   * Creates a Nested Form
   */
  createForm() {
    this.registerForm = this.fb.group({
      id: null,
      name: [null, Validators.required],
      salary: [null, Validators.required],
      dob: [null, Validators.required],
      qualifications: this.fb.array([this.initEmployeeForm()])
    });
  }

  initEmployeeForm() {
    return this.fb.group({
      id: null,
      degree: null,
      college: null
    });
  }

  addQualification() {
    const control = <FormArray>this.registerForm.controls['qualifications'];
    control.push(this.initEmployeeForm());
  }

  removeQualification(i: number) {
    const control = <FormArray>this.registerForm.controls['qualifications'];
    control.removeAt(i);
  }

  onSubmit() {
    const ctrl = this.registerForm.value;
    this.updatedEmployee.emit(ctrl);
  }
}
