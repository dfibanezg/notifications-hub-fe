import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-outlined',
  templateUrl: './panel-outlined.component.html',
  styleUrls: ['./panel-outlined.component.scss']
})
export class PanelOutlinedComponent {

  // background color for the panel
  @Input() bg = 'transparent';
}
