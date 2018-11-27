import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-server-add',
  template: `<button (click)="onAddServer($event)">Add Server</button>
  `
})
export class ServerAddComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  onAddServer(){
    this.serverCreated.emit({serverName:'Test Server 2',serverContent:'Test server 2 content'});
  }
}
