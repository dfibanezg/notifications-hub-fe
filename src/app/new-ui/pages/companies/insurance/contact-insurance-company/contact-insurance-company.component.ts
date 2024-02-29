import { Component } from '@angular/core';
import { ModalContactEditorComponent } from '../../company-editor/modal-contact-editor/modal-contact-editor.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'contacts-insurance-company',
  templateUrl: './contact-insurance-company.component.html',
  styleUrls: ['./contact-insurance-company.component.scss']
})
export class ContactsInsuranceCompanyComponent {
  public columns = [
    { title: 'Title', fieldName: 'title' },
    { title: 'Name', fieldName: 'name' },
    { title: 'Address', fieldName: 'address' },
    { title: 'City/ State / Zip', fieldName: 'cityStateZip' },
    { title: 'Email', fieldName: 'email' },
    { title: 'Phone', fieldName: 'phone' },

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

  public modalToShow: 'create' | 'update' = 'create';
  constructor(public dialog: MatDialog) { }
  openAddContact() {
    let comp = ModalContactEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, { data: { showGrantClaint:false }  });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
