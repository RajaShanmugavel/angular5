import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../employee';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  employee: Employee = new Employee();

  constructor(private fb: FormBuilder) {}

  createForm() {
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {}
}
