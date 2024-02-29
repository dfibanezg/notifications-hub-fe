import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file-tile',
  templateUrl: './upload-file-tile.component.html',
  styleUrls: ['./upload-file-tile.component.scss']
})
export class UploadFileTileComponent {

  @Input() title: string = '';
  // when implemented it will more complex array of
  @Input() files: string[] = [];

}
