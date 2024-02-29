import { Component, Input, inject, signal } from '@angular/core';

import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { UiService } from '../../services/ui.service';
import { MenuService } from 'src/app/services/menu.service';
import { MenuType } from 'src/app/models/menu';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
  @Input({ required: true }) opcionButton: OpcionButtonMenu = OpcionButtonMenu.none;
  @Input({ required: true }) menuSelected: Menus = Menus.Claims;
  private uiService = inject(UiService);
  public subMenuOpened: boolean = true;
  private menuService = inject(MenuService);
  public menu = signal<MenuType[]>([]);
  public menuMainNodes = signal<MenuType[]>([]);
  public optionsButtons = OpcionButtonMenu;
  public menuNone: Menus = Menus.None;

  get showTopBar() {
    return this.uiService.showTopBar();
  }

  get showSubMenu() {
    return this.uiService.showSubMenu();
  }

  constructor() {
    this.uiService.showSubMenu.set(true);
  }
  ngOnInit(): void {
    this.loadMenu();
  }



  public get URLOpcionButton() {

    switch (this.opcionButton) {
      case OpcionButtonMenu.carrier:
        return "/new-ui/carrier-editor"
      case OpcionButtonMenu.customer:
        return "/new-ui/customer-editor"
      case OpcionButtonMenu.insurance:
        return "/new-ui/insurance-editor"
      case OpcionButtonMenu.claim:
        console.log("claim button", "new-ui/claims/claims-editor");
        return "/new-ui/claims/claims-editor";

      case OpcionButtonMenu.none:
        return "/"
      default:
        return "/"
    }
  }
  public loadMenu() {

    let menuId = Menus[this.menuSelected];
    this.menuService.menuApp.subscribe(
      (response) => {
        this.menu.set(response.filter(x => x.type === menuId));
        this.menuMainNodes.set(this.menu().filter(x => x.father == 0));
      }
    );
  }
  childrenNode(father: number): MenuType[] {
    return this.menu().filter(x => x.father == father);
  }

  isImage(icon: string) {
    let temArray = icon.split('.');
    if (temArray.length > 1)
      return true;
    return false;

  }


}
