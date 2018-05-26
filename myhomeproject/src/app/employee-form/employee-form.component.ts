import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee = new Employee();

  @Input()
  resp: number;

  @Output()
  populatedEmployee = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      empId: '',
      salary: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('employeeForm valid:' + this.employeeForm.valid);
    this.employee = this.employeeForm.value;
    console.log('this.employee:' + this.employee.empId);
    this.populatedEmployee.emit(this.employee);
  }

}
