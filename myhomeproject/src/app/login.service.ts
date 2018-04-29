import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  url = 'http://localhost:8080/show-time';

  constructor(private http: HttpClient) {

  }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.url);
  }

}
