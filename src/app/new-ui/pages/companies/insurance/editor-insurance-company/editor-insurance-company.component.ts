import { Component, OnInit, inject } from '@angular/core';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { UiService } from 'src/app/new-ui/services/ui.service';

@Component({
  selector: 'editor-insurance-company',
  templateUrl: './editor-insurance-company.component.html',
  styleUrls: ['./editor-insurance-company.component.scss']
})
export class EditorInsuranceCompanyComponent implements OnInit {
  private uiService = inject(UiService);
  public menuCompanies = Menus.Companies;
  public menuClaims = Menus.Companies;
  public buttonCompany: OpcionButtonMenu = OpcionButtonMenu.company;

  ngOnInit(): void {
    this.uiService.showSubMenu.set(false);
  }
}



