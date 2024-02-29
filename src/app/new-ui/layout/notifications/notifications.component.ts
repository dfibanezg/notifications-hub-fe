import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/models/Notification';

@Component({
  selector: 'layout-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
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
