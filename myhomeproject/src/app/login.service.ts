import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee';

@Injectable()
export class LoginService {

  url = 'http://localhost:8080/show-time';

  headers = new Headers({
    'Authorization': 'Basic ',
    'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
  });

  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: HttpClient) {

  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

}
