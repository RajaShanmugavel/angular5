import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentManageService {
  APP_URL = 'http://localhost:3000/students';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.APP_URL + '/all');
  }
}
