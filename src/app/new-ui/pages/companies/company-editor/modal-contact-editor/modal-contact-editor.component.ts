import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-contact-editor',
  templateUrl: './modal-contact-editor.component.html',
  styleUrls: ['./modal-contact-editor.component.scss']
})
export class ModalContactEditorComponent {

  constructor(
    ///public dialogRef: MatDialogRef<ModalContactEditorComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }

}
