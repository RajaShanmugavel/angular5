import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  resp: number;
  employee: Employee;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.loginService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  handlePopulatedEmployee(employee: Employee) {
    console.log('Emitted value:' + employee.name);
    this.loginService.saveEmployee(employee).subscribe(res => {
      this.resp = res;
    });
  }

  handleEditEmployee(employee: Employee) {
    this.employee = employee;
  }

  handleDelEmployee(employee: Employee) {

  }

}
