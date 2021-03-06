import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {

  employeeForm: FormGroup;
  employee: Employee = new Employee();

  @Input()
  editEmployee: Employee;

  @Input()
  resp: number;

  @Output()
  populatedEmployee = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      id: '',
      name: new FormControl('', Validators.required),
      empId: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.editEmployee) {
      this.employeeForm.setValue({
        id: this.editEmployee.id,
        name: this.editEmployee.name,
        empId: this.editEmployee.empId,
        salary: this.editEmployee.salary
      });
    }
  }

  clear() {
    this.employeeForm.reset();
  }

  onSubmit() {
    console.log('employeeForm valid:' + this.employeeForm.valid);
    if (this.employeeForm.valid) {
      this.employee = this.employeeForm.value;
      console.log('this.employee:' + this.employee.id);
      this.populatedEmployee.emit(this.employee);
      this.clear();
      }
  }

}
