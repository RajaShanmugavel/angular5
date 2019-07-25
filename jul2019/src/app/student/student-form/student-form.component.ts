import { Component, OnInit } from '@angular/core';
import { State } from './state';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  states: State[] = [
    { value: 'NSW', viewValue: 'New South Wales' },
    { value: 'VIC', viewValue: 'Victoria' },
    { value: 'QLD', viewValue: 'Queensland' }
  ];

  constructor() {}

  ngOnInit() {}
}
