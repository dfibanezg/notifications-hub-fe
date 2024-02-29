import { Component, OnInit, inject } from '@angular/core';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { UiService } from 'src/app/new-ui/services/ui.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public menuCompanies = Menus.Companies;
  public menuClaims = Menus.Companies;
  public buttonCompany: OpcionButtonMenu = OpcionButtonMenu.customer;

  private uiService = inject(UiService);

  ngOnInit(): void {
    this.uiService.showSubMenu.set(false);
  }
}


