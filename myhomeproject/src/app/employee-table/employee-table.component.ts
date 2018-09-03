import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class EmployeeTableComponent implements OnInit, OnChanges {

  displayedColumns = ['name', 'empId', 'salary', 'actions'];

  @Input()
  populatedEmployees: Employee[];

  @Input()
  resp: number;

  @Output()
  editEmployee = new EventEmitter<any>();

  @Output()
  delEmployee = new EventEmitter<Employee>();

  dataSource = new EmployeeDataSource(this.loginService);

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resp']) {
      this.dataSource = new EmployeeDataSource(this.loginService);
    }
  }

  // on Edit
  onEdit(employee: Employee, index: number) {
    this.editEmployee.emit(employee);
  }

  // On Delete
  onDel(employee: Employee) {
    this.delEmployee.emit(employee);
  }

  onRowClick(employee: Employee) {
    console.log('row click ->' + employee.name);
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
