import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { debug } from 'util';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {
  employee: Employee;

  selectedEmployee: Employee;

  employeesList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  /**
   *
   * get the populated employee and pass on to saveEmployee call via service
   */
  handleSubmittedEmployee(employee: Employee) {
    this.employee = employee;
    this.employeeService.saveEmployee(employee).subscribe(res => {
      this.getEmployees();
    });
  }

  /**
   *
   * @param employee
   */
  handleClickedEmployee(employee: Employee) {
    if (this.selectedEmployee) {
      this.selectedEmployee = employee;
    }
  }

  /**
   *
   * get employees
   */
  getEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employeesList = result;
    });
  }
}
