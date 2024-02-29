import { Component, signal } from '@angular/core';

@Component({
  selector: 'claims-editor-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {

  public isCreatingCarrier = signal<boolean>(false);
  public isCreatingCustomer = signal<boolean>(false);

}
