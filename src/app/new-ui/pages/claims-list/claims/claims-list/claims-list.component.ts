import { Component, Input, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClaimsFiltersComponent } from '../claims-filters/claims-filters.component';
import { ConfigureTableComponent } from '../configure-table/configure-table.component';
import { UiService } from 'src/app/new-ui/services/ui.service';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';


@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.scss']
})
export class ClaimsListComponent implements OnInit {


  public menuClaims = Menus.Claims;
  @Input() button: OpcionButtonMenu = OpcionButtonMenu.claim;



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.openConfigureTable();
  }

  openMoreFilters() {

    const dialogRef = this.dialog.open( ClaimsFiltersComponent, { position : {right:'0px', top:'0px'}, maxHeight: '100vh', width:'350px'},);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openConfigureTable() {
    const dialogRef = this.dialog.open( ConfigureTableComponent, { },);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
