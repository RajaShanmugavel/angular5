import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  displayedColumns = ['name', 'empId', 'salary'];

  @Input()
  populatedEmployees: Employee[];

  dataSource = new EmployeeDataSource(this.loginService);

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

}

export class EmployeeDataSource extends DataSource<any> {

  constructor(private loginService: LoginService) {
    super();
  }

  connect(): Observable<Employee[]> {
    return this.loginService.getEmployees();
  }

  disconnect() { }
}
