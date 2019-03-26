import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {

  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  handleSubmittedEmployee(employee: Employee) {
    this.employee = employee;
  }

}
