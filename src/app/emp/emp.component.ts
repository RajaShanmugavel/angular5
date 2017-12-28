import { Component, OnInit } from '@angular/core';
// import { Event } from '_debugger';

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
  serverName = '';
  serverCreated = false;
    
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
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
