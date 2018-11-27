import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-first-app';
  listItems = ["Item 1","Item 2"];
  serverElements = [{type:'server',name:'Test Server 1',content:'Just a Test!'}]

  onItemAdded(item){
    let len = this.listItems.length+1;
    this.listItems.push(item+' '+len);
  }

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:  serverData.serverContent
    });
  }


  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
