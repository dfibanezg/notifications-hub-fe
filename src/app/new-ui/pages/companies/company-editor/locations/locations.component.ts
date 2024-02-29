import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLocationEditorComponent } from '../modal-location-editor/modal-location-editor.component';
@Component({
  selector: 'company-editor-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  public columns = [

    { title: 'Name', fieldName: 'name' },
    { title: 'Address', fieldName: 'address' },
    { title: 'City / State / Zip', fieldName: 'cityStateZip' },
    { title: 'Email', fieldName: 'email' },
    { title: 'Phone', fieldName: 'phone' },
    { title: 'Type', fieldName: 'type' },
  ];
  public locations = [
    {
      name: '1234567891234',

      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      name: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      name: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
  ];

  public modalToShow: 'create' | 'invite' = 'create';


  constructor(public dialog: MatDialog) { }
  openAddLocation() {
    let comp = ModalLocationEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
