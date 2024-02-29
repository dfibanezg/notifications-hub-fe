import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-email-templates-editor',
  templateUrl: './email-templates-editor.component.html',
  styleUrls: ['./email-templates-editor.component.scss']
})
export class EmailTemplatesEditorComponent {

  public location = inject(Location);
 
  
  
}
