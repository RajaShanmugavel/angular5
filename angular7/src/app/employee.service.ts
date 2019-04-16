import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  APP_URL = 'http://localhost:8080/employee';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.APP_URL + '/all');
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.APP_URL + '/save', employee);
  }
}
