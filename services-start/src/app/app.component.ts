import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'app/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name:string, status:string}[] = [];

  constructor(private accountService:AccountsService){ // To inject a Service -> declare import, add to provider(only in appcomp), declare in constructor
  }

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
