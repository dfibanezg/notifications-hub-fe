import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImpersonateComponent } from '../impersonate/impersonate.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  public isImpersonating = signal<boolean>(false);

  constructor(public dialog: MatDialog) { }

  openImpersontateWindow() {
    const dialogRef = this.dialog.open( ImpersonateComponent, { },);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.isImpersonating.set(true);
    });
  }

}
