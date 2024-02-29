import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent {

  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() permissions: string = "";
  @Input() users: string = "";

}
