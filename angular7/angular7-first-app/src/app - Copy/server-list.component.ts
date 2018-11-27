import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-list',
  template: `
  <div>
  {{element.name}}
</div>
`
})
export class ServerListComponent {
  @Input() element:{type:string, name:string, content:string};
}
