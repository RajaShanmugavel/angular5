import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';
import { debug } from 'util';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  @Input()
  receivedStudents: Student[];

  @Output()
  editedStudent = new EventEmitter<Student>();

  @Output()
  deletedStudent = new EventEmitter<Student>();

  constructor() {}

  ngOnInit() {}

  onEdit(student: Student) {
    this.editedStudent.emit(student);
  }

  OnDelete(student: Student) {
    this.deletedStudent.emit(student);
  }
}
