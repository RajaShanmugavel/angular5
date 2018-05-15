import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Employee } from './employee';
import { User } from './user';

@Injectable()
export class LoginService {

  url = 'http://localhost:8080/show-time';
  API_URL = 'http://localhost:8080';

  headers = new Headers({
    'Authorization': 'Basic ',
    'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
  });

  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: Http) {

  }

  authenticateUser(user: User): void {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var base64Credential: string = btoa(user.username + ':' + user.password);
    headers.append('Authorization', 'Basic' + base64Credential);

    let options = new RequestOptions;
    options.headers = headers;

    this.http.post(this.API_URL + '/login', options).subscribe(resp => {
      localStorage.setItem('currentUser', resp.toString());
    });

  }

  getEmployees(): Observable<Employee[]> {
    // return this.http.get(this.url);
    return null;
  }

}
