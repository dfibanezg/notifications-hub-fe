import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menus } from 'src/app/constans/menus';
import { ClaimsFiltersComponent } from '../../claims-list/claims/claims-filters/claims-filters.component';
import { ConfigureTableComponent } from '../../claims-list/claims/configure-table/configure-table.component';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {

  public menuCompanies = Menus.Companies;
  public menuClaims = Menus.Claims;
  public buttonCompany: OpcionButtonMenu = OpcionButtonMenu.customer;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.openConfigureTable();
  }

  openMoreFilters() {

    const dialogRef = this.dialog.open(ClaimsFiltersComponent, { position: { right: '0px', top: '0px' }, maxHeight: '100vh', width: '350px' },);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openConfigureTable() {
    const dialogRef = this.dialog.open(ConfigureTableComponent, {},);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
