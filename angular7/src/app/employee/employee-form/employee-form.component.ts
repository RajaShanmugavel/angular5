import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee = new Employee();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      id: null,
      firstName: null,
      lastName: null,
      email: null
    });
  }

  onSubmit() {
    const val = this.employeeForm.value;
    console.log('value submitted:' + val);
  }
}
