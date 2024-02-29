import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-claim-setting',
  templateUrl: './new-claim-setting.component.html',
  styleUrls: ['./new-claim-setting.component.scss']
})
export class NewClaimSettingComponent {

  inputValue: string = '';

  @Input() showColorSelect: boolean = true;
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() type: 'open-status'|'closed-status'|'type'|'condition'|'reasons'|'carrier-modes' = 'open-status';

  constructor(public dialogRef: MatDialogRef<NewClaimSettingComponent>) {}

  save(): string {
    this.dialogRef.close('save');
    return this.inputValue;
  }

  close(): void {
    this.dialogRef.close();
  }
}
