import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  // styleUrls: ['./stud.component.css']
  styles: [`
    .online {
      color : white;
    }
  `]
})
export class StudComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 2.5 ? 'online' : 'offline';
   }

   getServerStatus(){
     return this.serverStatus;
   }

   getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red';
   }

  ngOnInit() {
  }

}
