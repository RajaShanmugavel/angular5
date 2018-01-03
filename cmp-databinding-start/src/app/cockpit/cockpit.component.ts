import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>(); // This is the alias. app component html now uses bpCreated instead of blueprintCreated
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
    
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput);
    // console.log(nameInput.value);
    this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value, 
      serverContent: this.newServerContent
    });
  }  

}
