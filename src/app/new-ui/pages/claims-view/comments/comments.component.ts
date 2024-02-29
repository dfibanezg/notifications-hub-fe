import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'claims-view-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() menuRef: TemplateRef<any> | null = null;
  
}
