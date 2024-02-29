import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/new-ui/services/ui.service';

@Component({
  selector: 'claims-list-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  private uiService = inject(UiService);
  subMenuOpened: boolean = true;
  
  get showTopBar() {
    return this.uiService.showTopBar();
  }

  get showSubMenu() {
    return this.uiService.showSubMenu();
  }

  /**
   *
   */
  constructor() {
    this.uiService.showSubMenu.set(true);
  }
}
