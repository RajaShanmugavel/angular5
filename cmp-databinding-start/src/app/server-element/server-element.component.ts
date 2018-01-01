import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string}; // the argument 'srvElement' inside @Input is the alias. If not used, will be accessed using 'element'

  constructor() { }

  ngOnInit() {
  }

}
