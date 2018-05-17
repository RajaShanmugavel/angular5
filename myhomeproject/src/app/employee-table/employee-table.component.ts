import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  displayedColumns = ['name', 'empId', 'salary'];

  @Input()
  populatedEmployees: Employee[];

  constructor() { }

  ngOnInit() {
  }

}
