import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

  public startConnection = (): void => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7172/notificationHub') // Update with your SignalR hub URL
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.error('Error while starting connection: ', err));
  };

  public addNotificationListener = (callback: (data: any) => void): void => {
    this.hubConnection.on('ReceiveNotification', (data) => {
      callback(data);
    });
  };
}