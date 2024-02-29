import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, signal } from '@angular/core';

@Component({
  selector: 'claims-view-party-panel',
  templateUrl: './party-panel.component.html',
  styleUrls: ['./party-panel.component.scss']
})
export class PartyPanelComponent {

  @ContentChild('leftIcon') leftIcon: TemplateRef<any> | null = null;

  @Input() readOnly: boolean = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() address1: string = '';
  @Input() cityStateZip: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';

  @Input() addNewRoute : string = '';

  public isEditing = signal<boolean>(false);

}
