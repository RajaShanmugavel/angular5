import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder) {}

  /**
   * Creates a Nested Form
   */
  createForm() {
    this.registerForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      salary: ['', Validators.required],
      dob: ['', Validators.required],
      qualifications: this.fb.array([this.initEmployeeForm()])
    });
  }

  initEmployeeForm() {
    return this.fb.group({
      degree: '',
      college: ''
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

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {}
}
