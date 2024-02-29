import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleEditorComponent } from '../role-editor/role-editor.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent {

  constructor(public dialog: MatDialog) { }

  // openRolesEditor() {
  //   const dialogRef = this.dialog.open( RoleEditorComponent, { position : {right:'0px', top:'0px'}, height: '100vh', width:'calc(100vw - 80px)', maxWidth:'100vw)', hasBackdrop:false},);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
