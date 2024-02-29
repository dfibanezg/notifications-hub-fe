import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'claim-editor-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {

  @Input() readOnly: boolean = false;

  public isActiveFreightCharges = signal<boolean>(false);

}
