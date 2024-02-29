import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-icon',
  templateUrl: './badge-icon.component.html',
  styleUrls: ['./badge-icon.component.scss']
})
export class BadgeIconComponent {

  @Input() badge: string = "";
  @Input() src: string = "";


}
