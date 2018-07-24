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
  resp: Employee;
  employee: Employee;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getEmployees();
  }

  /**
   * Fetch employees
   *
   */
  getEmployees() {
    this.loginService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  /**
   * Handle the emitted employee and call saveEmployee() method
   *
   * @param employee
   */
  handlePopulatedEmployee(employee: Employee) {
    this.loginService.saveEmployee(employee).subscribe(res => {
      this.resp = res;
      this.getEmployees();
    });
  }

  /**
   * Handle the emitted employee and assign to local for edit
   *
   * @param employee
   * @param index
   */
  handleEditEmployee(employee: Employee, index: number) {
    this.employee = employee;
  }

  handleDelEmployee(employee: Employee) {
    this.loginService.deleteEmployee(employee).subscribe(res => {
      this.resp = res;
      this.getEmployees();
    });
  }

}
