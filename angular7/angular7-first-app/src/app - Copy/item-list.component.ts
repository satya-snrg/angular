import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  template: `
  <div>
  {{item}}
</div>
`})
export class ItemListComponent {
  @Input() item:any;
}
