import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from './invite-user/invite-user.component';
import { UserEditorComponent } from '../user-editor/user-editor.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public columns = [
    { title: 'Name', fieldName: 'name' },
    { title: 'Email', fieldName: 'email' },
    { title: 'Phone', fieldName: 'phone' },
    { title: 'Address', fieldName: 'address' },
    { title: 'City/State/Zipcode', fieldName: 'cityStateZip' },
    { title: 'Role', fieldName: 'role' },
  ];
  public users = [
    {
      name: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      role: 'Admin',
    },
    {
      name: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      role: 'Power User',
    },
    {
      name: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      role: 'Power User',
    },
  ];

  public modalToShow : 'create' | 'invite' = 'create';

  constructor(public dialog: MatDialog) { }

  openAddUser() {

      let comp = null;

      if(this.modalToShow==='create'){
        comp = UserEditorComponent;
        this.modalToShow = 'invite';
      }
      else {
        comp = InviteUserComponent;
        this.modalToShow = 'create';
      }


      const dialogRef = this.dialog.open( comp, { },);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

  }


}
