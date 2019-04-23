import { Component, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/employee';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee = new Employee();

  @Output()
  submittedEmployee = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      name: null,
      joiningDate: null,
      salary: null,
      ssn: null
    });
  }

  onSubmit() {
    const val = this.employeeForm.value;
    console.log('value submitted:' + val);
    this.submittedEmployee.emit(val);
  }
}
