import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

  @Input() text : string = '';
  @Input() size : 'medium' | 'small' | 'xsmall' = 'small';
  @Input() icon : string = '';

}
