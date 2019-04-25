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
    if (employee.id) { // update existing
      employee = {
        ...employee,
        id: employee.id,
        name: employee.name,
        joiningDate: employee.joiningDate,
        salary: employee.salary,
        ssn: employee.ssn
      };
      return this.httpClient.put<Employee>(this.APP_URL + '/save', employee);
    } else { // save new
      employee = {
        ...employee,
        name: employee.name,
        joiningDate: employee.joiningDate,
        salary: employee.salary,
        ssn: employee.ssn
      };
      return this.httpClient.post<Employee>(this.APP_URL + '/save', employee);
    }
  }
}
