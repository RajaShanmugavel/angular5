import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Employee } from '../employee';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  employees: Employee[] = [];
  user: User = new User();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    // this.loginService.getEmployees().subscribe(e => {
    //   this.employees = e;
    // });
  }

  onSubmit() {
    alert('Hello');
    this.loginService.authenticateUser(this.user);
  }

}
