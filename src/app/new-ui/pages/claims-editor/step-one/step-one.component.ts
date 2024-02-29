import { Component } from '@angular/core';

@Component({
  selector: 'claims-editor-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {

  public identifierOptions = [
    { text:'Option 1', value: "option1"},
    { text:'Option 2', value: "option2"},
    { text:'Option 3', value: "option3"},
  ]

}
