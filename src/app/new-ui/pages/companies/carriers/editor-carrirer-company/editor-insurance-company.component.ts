import { Component, inject } from '@angular/core';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { UiService } from 'src/app/new-ui/services/ui.service';

@Component({
  selector: 'editor-carrier-company',
  templateUrl: './editor-carrier-company.component.html',
  styleUrls: ['./editor-carrier-company.component.scss']
})
export class EditorCarrierCompanyComponent {
  private uiService = inject(UiService);
  public menuCompanies = Menus.Companies;
  public menuClaims = Menus.Companies;
  public buttonCompany: OpcionButtonMenu = OpcionButtonMenu.carrier;

  ngOnInit(): void {
    this.uiService.showSubMenu.set(false);
  }
}


