import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewClaimSettingComponent } from '../new-claim-setting/new-claim-setting.component';
@Component({
  selector: 'claims-settings-sub-card',
  templateUrl: './claims-settings-sub-card.component.html',
  styleUrls: ['./claims-settings-sub-card.component.scss']
})
export class ClaimsSettingsSubCardComponent {
  
  @Input() title: string = '';
  @Input() newSubButton: string = '';
  // when implemented it will more complex array of
  @Input() files: string[] = [];

  constructor(public dialog: MatDialog) {
    //this.openNewClaimStatus(true, 'New Open Claim Status', 'Status Name');
  }

  openNewClaimSetting(showColorSelect: boolean, title: string, label: string) {
    const dialogRef = this.dialog.open(NewClaimSettingComponent, {},);
    dialogRef.componentInstance.showColorSelect = showColorSelect;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.label = label;


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
