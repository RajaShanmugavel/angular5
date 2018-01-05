import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 'None' - Overrides style, also 'Native' (this does the shadow DOM). Default is 'Emulated'
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: { type: string, name: string, content: string }; // The argument 'srvElement' inside @Input is the alias. If not used, will be accessed using 'element'

  constructor() {
    console.log("Constructor of ServerElementComponent called!");
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges of ServerElementComponent called!");
    console.log("Changes:"+changes);
  }


  ngOnInit() {
    console.log("ngOnInit of ServerElementComponent called!");
  }
}
