import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-email-tile',
  templateUrl: './email-tile.component.html',
  styleUrls: ['./email-tile.component.scss']
})
export class EmailTileComponent {

  public expanded = signal<boolean>(false);
  public isReplying = signal<boolean>(false);
  @Input() public from : string = "";


  showExpanded(value: boolean) {
    this.expanded.set(value);
  }

  reply(e: MouseEvent){

    e.stopPropagation();

  }

}
