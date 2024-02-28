import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  notificationNumberCount: number = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.startConnection();
    this.notificationService.addNotificationListener((message: string) => {
      this.messages.push(message);
      this.notificationNumberCount++;
    });
  }
}