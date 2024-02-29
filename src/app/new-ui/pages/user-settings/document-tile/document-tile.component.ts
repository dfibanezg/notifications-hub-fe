import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-tile',
  templateUrl: './document-tile.component.html',
  styleUrls: ['./document-tile.component.scss']
})
export class DocumentTileComponent {

  @Input() title: string= '';
  @Input() subtitle: string= '';
  @Input() subject: string= '';
  @Input() body: string= '';
  @Input() lastEdited: string= '';

}
