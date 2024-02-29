import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {

  @Input() height: string = '100px';
  @Input() label: string = 'label';
  @Input() placeholder: string = '';
  @Input() hint: string = '';


}
