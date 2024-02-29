import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

type GroupToShow = 'uploaded'|'templates';

@Component({
  selector: 'app-claims-new-email',
  templateUrl: './claims-new-email.component.html',
  styleUrls: ['./claims-new-email.component.scss']
})
export class ClaimsNewEmailComponent {

  public location = inject(Location);
 
  public groupToShow: GroupToShow = 'uploaded';
  public options: GroupToShow[] = ['uploaded','templates'];

  public templateOptions = [
    { text:'Option 1', value: "option1"},
    { text:'Option 2', value: "option2"},
    { text:'Option 3', value: "option3"},
  ];

  toggleGroupChange(value: string) {
    this.groupToShow = value as GroupToShow;
  }

}
