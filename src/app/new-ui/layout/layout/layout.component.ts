import { Component, OnInit, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private uiService = inject(UiService);
  subMenuOpened: boolean = true;

  get showTopBar() {
    return this.uiService.showTopBar();
  }

  get showSubMenu() {
    return this.uiService.showSubMenu();
  }

  constructor() { }

  ngOnInit(): void { }

  sidenavToggle() {
    this.uiService.showSubMenu.update((prev: boolean) => !prev)
  }
}
