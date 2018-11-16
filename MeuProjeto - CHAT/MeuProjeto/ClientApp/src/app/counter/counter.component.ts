import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  public message: string = '';
  public messages: string[] = [];

  public connection: HubConnection;

  constructor() {
    const builder = new HubConnectionBuilder();
    this.connection = builder.withUrl('http://localhost:5000/chat').build();
  }
  ngOnInit() {

    this.connection.on('Send', (msg) => {
      this.messages.push(msg);
    });
    this.connection.start()
      .then(() => {
       console.log("Connection started");
        
      }).catch(err => { console.error(err); });
  }
  echo() {
    this.connection.invoke("Echo", this.message);
  }
}
