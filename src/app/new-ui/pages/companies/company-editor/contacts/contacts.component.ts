import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactEditorComponent } from '../modal-contact-editor/modal-contact-editor.component';

@Component({
  selector: 'company-editor-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  public columns = [
    { title: 'Name', fieldName: 'name' },
    { title: 'Title', fieldName: 'title' },
    { title: 'Address', fieldName: 'address' },
    { title: 'City/ State / Zip', fieldName: 'cityStateZip' },

    { title: 'Email', fieldName: 'email' },
    { title: 'Phone', fieldName: 'phone' },
    { title: 'Claims Access', fieldName: 'claimsaccess' },
  ];
  public contacts = [
    {
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes',
    },
    {
      name: '1234567891234',
      title: '1234567891234',

      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      claimsaccess: 'No',
    },
    {
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes',
    },
  ];

  public modalToShow: 'create' | 'invite' = 'create';

  constructor(public dialog: MatDialog) { }

  openAddContact() {




     let comp = ModalContactEditorComponent;
      this.modalToShow = 'create';


    const dialogRef = this.dialog.open(comp, { data: { showGrantClaint:true }  }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
