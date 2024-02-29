import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-letter-templates-editor',
  templateUrl: './letter-templates-editor.component.html',
  styleUrls: ['./letter-templates-editor.component.scss']
})
export class LetterTemplatesEditorComponent {
  public location = inject(Location);

}
