import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-emp]',
  //selector: 'app-emp',
  selector: '.app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  empId: number = 100;
  empName: string = 'Raja';

  constructor() { }

  ngOnInit() {
  }

  getEmpId(){
    return this.empId;
  }

  getEmpName(){
    return this.empName;
  }

}
