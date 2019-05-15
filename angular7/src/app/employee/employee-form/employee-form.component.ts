import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { Employee } from 'src/app/employee';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  employeeForm: FormGroup;
  employee: Employee = new Employee();

  @Input()
  selectedEmployee: Employee;

  @Output()
  submittedEmployee = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    console.log(this.selectedEmployee.name);
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
    this.employeeForm.reset();
  }
}
