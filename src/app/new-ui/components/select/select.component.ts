import { Component, Input } from '@angular/core';

export interface SelectOption {
  text: string;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() options : SelectOption[] = [];
  @Input() initialValue : string = "";
  @Input() label : string = "";
  @Input() hint : string = "";


}
