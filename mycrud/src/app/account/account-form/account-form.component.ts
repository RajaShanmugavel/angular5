import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.accountForm = this.fb.group({
      id: null,
      name: null,
      dob: null,
      gender: null
    });
   }

  ngOnInit() {
  }

}
