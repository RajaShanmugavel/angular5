import { Component } from '@angular/core';
// Use Augury Chrome extension to get more information about components and injections...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }
}
