import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public connection: HubConnection;
  constructor() {
    const builder = new HubConnectionBuilder();
    this.connection = builder.withUrl('http://localhost:5000/contador').build();
  }
  ngOnInit() {
    this.connection.start()
      .then(() => {
        this.connection.on('getContador', (valor) => {
          this.currentCount = valor;
        });
        this.connection.on('broadcastContador', (valor) => {
          this.currentCount = valor;
        });
        this.connection.invoke('GetContador');
      });
  }
  public incrementCounter() {
    this.connection.invoke('SomaContador');
  }
}
