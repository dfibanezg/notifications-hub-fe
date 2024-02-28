import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let message of messages">
      <mat-card>{{ message }}</mat-card>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  messages: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.startConnection();
    this.notificationService.addNotificationListener((message: string) => {
      this.messages.push(message);
    });
  }
}