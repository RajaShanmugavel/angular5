import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>(); // This is the alias. app component html now uses bpCreated instead of blueprintCreated
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    console.log("Constructor of CockpitComponent called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges of CockpitComponent called!");
    console.log("Changes:" + changes);
  }


  ngOnInit() {
    console.log("ngOnInit of CockpitComponent called!");
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
