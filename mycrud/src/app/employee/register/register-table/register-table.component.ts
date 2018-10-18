import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrls: ['./register-table.component.css']
})
export class RegisterTableComponent implements OnInit {

  @Input()
  displayEmployee: Employee;

  constructor() {}

  ngOnInit() {}
}
