import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  APP_URL = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.APP_URL);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.APP_URL, employee);
  }

}
