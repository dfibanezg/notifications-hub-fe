import { Component, Input } from '@angular/core';

@Component({
  selector: 'document-requirement',
  templateUrl: './document-requirement.component.html',
  styleUrls: ['./document-requirement.component.scss']
})
export class DocumentRequirementComponent {
  @Input() text: string = '';
  @Input() isRequired: boolean = false;
  @Input() isRecomended: boolean = false;
}
