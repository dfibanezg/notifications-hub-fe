import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-claims-view',
  templateUrl: './claims-view.component.html',
  styleUrls: ['./claims-view.component.scss']
})
export class ClaimsViewComponent {


  constructor(public dialog: MatDialog) { }


  openUpdateStatus() {
    const dialogRef = this.dialog.open( UpdateStatusComponent, { },);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  openNewTask() {
    const dialogRef = this.dialog.open( NewTaskComponent, { },);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
