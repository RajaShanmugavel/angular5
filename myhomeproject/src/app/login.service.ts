import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from './employee';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  url = 'http://localhost:8080/show-time';
  // API_URL = 'http://localhost:8080';
  API_URL = 'http://localhost:3000/employees';

  // headers = new Headers({
  //   'Authorization': 'Basic ',
  //   'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
  // });

  // options = new RequestOptions({
  //   headers: this.headers
  // });

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(user: User): void {
    // var headers = new Headers();
    // headers.append('Accept', 'application/json');
    // var base64Credential: string = btoa(user.username + ':' + user.password);
    // headers.append('Authorization', 'Basic' + base64Credential);

    // let options = new RequestOptions;
    // options.headers = headers;

    // this.http.post(this.API_URL + '/login', options).subscribe(resp => {
    //   localStorage.setItem('currentUser', resp.toString());
    // });

  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    if (employee.id) {
      // below is not required. But still...
      employee = {
        ...employee,
        id: employee.id,
        name: employee.name,
        empId: employee.empId,
        salary: employee.salary
      };
      return this.httpClient.put<Employee>(this.API_URL + '/' + employee.id, employee);
    } else {
      employee = {
        ...employee,
        name: employee.name,
        empId: employee.empId,
        salary: employee.salary
      };
      return this.httpClient.post<Employee>(this.API_URL, employee);
    }
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.API_URL + '/' + employee.id);
  }

}
