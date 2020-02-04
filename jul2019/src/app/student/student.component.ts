import { Component, OnInit } from '@angular/core';
import { StudentManageService } from '../student-manage.service';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  students: Student[] = [];

  constructor(private studentService: StudentManageService) {}

  ngOnInit() {
    this.getAllStudents();
  }

  handleSubmittedStudent(student: Student) {
    this.studentService.saveStudent(student).subscribe(res => {
      this.getAllStudents();
    });
  }

  handleDeletedStudent(student: Student) {
    console.log('delete student:' + student.firstName);
    this.studentService.deleteStudent(student).subscribe(res => {
      this.getAllStudents();
    });
  }

  handleEditedStudent(student: Student) {
    debugger;
    this.student = student;
  }

  getAllStudents() {
    this.studentService.getStudents().subscribe(res => {
      this.students = res;
    });
  }
}
