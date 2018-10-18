import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.css']
})
export class RegisterMainComponent implements OnInit {

  employee: Employee;

  constructor() {}

  ngOnInit() {}

  handleUpdatedEmployee(employee: Employee) {
    this.employee = employee;
  }
}
