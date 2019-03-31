import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {
  employee: Employee;

  employeesList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  /**
   *
   * @param employee
   */
  handleSubmittedEmployee(employee: Employee) {
    this.employee = employee;
    this.employeeService.saveEmployee(employee).subscribe(res => {
      this.getEmployees();
    });
  }

  /**
   *
   */
  getEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employeesList = result;
    });
  }
}
