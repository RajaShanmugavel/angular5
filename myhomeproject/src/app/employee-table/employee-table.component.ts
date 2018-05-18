import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  displayedColumns = ['name', 'empId', 'salary'];

  @Input()
  populatedEmployees: Employee[];

  dataSource = new MatTableDataSource(this.populatedEmployees);

  constructor() { }

  ngOnInit() {
  }

}

// export class EmployeeDataSource extends DataSource<any> {
//   connect(): Observable<Employee[]> {
//     return null;
//   }

//   disconnect() { }
// }
