import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input()
  listOfEmployees: Employee[];

  @Output()
  clickedEmployee = new EventEmitter<Employee>();

  constructor() {}

  ngOnInit() {}

  onRowSelect(employee: Employee) {
    this.clickedEmployee.emit(employee);
    // console.log('selected employee:' + employee.name);
  }
}
