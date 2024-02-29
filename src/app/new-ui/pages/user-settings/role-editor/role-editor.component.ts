import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/new-ui/services/ui.service';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.scss']
})
export class RoleEditorComponent {

  private uiService = inject(UiService);

  constructor() {
    this.uiService.showSubMenu.set(false);
    this.uiService.showTopBar.set(false);
  }

}
