import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

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

  constructor() { }

  ngOnInit() {
  }

  onEdit(student: Student) {
    this.editedStudent.emit(student);
  }

}
