import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-emp]',
  //selector: 'app-emp',
  selector: '.app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  
  empId: number = 100;
  empName: string = 'Raja';

  constructor() { 
     setTimeout(()=>{
      this.allowNewServer= true;
     },2000);
    }
  ngOnInit() {
  }

  getEmpId(){
    return this.empId;
  }

  getEmpName(){
    return this.empName;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event:any){
    console.log(event);
  }

}
