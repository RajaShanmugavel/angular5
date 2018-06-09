import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  displayedColumns = ['name', 'empId', 'salary', 'actions'];

  @Input()
  populatedEmployees: Employee[];

  @Output()
  editEmployee = new EventEmitter<any>();

  @Output()
  delEmployee = new EventEmitter<Employee>();

  dataSource = new EmployeeDataSource(this.loginService);

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onEdit(employee: Employee, index: number) {
    this.editEmployee.emit({ employee: employee, index: index });
  }

  onDel(employee: Employee) {
    this.delEmployee.emit(employee);
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
