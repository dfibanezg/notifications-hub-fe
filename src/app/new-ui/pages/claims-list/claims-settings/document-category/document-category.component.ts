import { Component, Input } from '@angular/core';

@Component({
  selector: 'document-category',
  templateUrl: './document-category.component.html',
  styleUrls: ['./document-category.component.scss']
})
export class DocumentCategoryComponent {
  @Input() text: string = '';
  @Input() isEditable: boolean = false;
  @Input() isDeletable: boolean = false;

  mouseOver : boolean = false;

  showEditableButtons(showEditableButtons: boolean){
    this.mouseOver = showEditableButtons;
  }
}
