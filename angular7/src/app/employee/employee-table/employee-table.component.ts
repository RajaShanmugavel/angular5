import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input()
  listOfEmployees: Employee[];

  constructor() {}

  ngOnInit() {}
}
