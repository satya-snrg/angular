import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-item-add',
  template: `<button (click)="addListItem($event)">Add Item</button> <br>
  `
})
export class ItemAddComponent {
  @Output() itemCreated = new EventEmitter<{}>();

  addListItem(){
    this.itemCreated.emit('Item');
  }
}
