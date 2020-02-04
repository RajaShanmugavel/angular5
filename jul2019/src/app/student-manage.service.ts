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

  /**
   * Get All Students..
   * @param student[]
   */
  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.APP_URL);
  }

  /**
   * Save or Update a Student..
   * @param student
   */
  saveStudent(student: Student): Observable<Student> {
    debugger;
    if (student.id) {
      // update existing student
      return this.httpClient.put<Student>(
        this.APP_URL + '/' + student.id,
        student
      );
    } else {
      // save new student
      student = {
        ...student,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        state: student.state
      };
      return this.httpClient.post<Student>(this.APP_URL, student);
    }
  }

  /**
   * Delete a student
   * @param student
   *
   * @param student
   */
  deleteStudent(student: Student): Observable<Student> {
    return this.httpClient.delete<Student>(this.APP_URL + '/' + student.id);
  }
}
