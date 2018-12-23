import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Account } from '../account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit, OnChanges {

  accountForm: FormGroup;
  account: Account = new Account();

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

  ngOnInit() {}

  ngOnChanges() {}

  onSubmit() {
    this.account = this.accountForm.value;
    console.log(this.account);
  }
}
