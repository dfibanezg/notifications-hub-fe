import { Component } from '@angular/core';

@Component({
  selector: 'automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.scss']
})
export class AutomationsComponent {
  stagnatEnable: boolean = false;

  toggleStagnat(){
    this.stagnatEnable = !this.stagnatEnable;
  }
}
