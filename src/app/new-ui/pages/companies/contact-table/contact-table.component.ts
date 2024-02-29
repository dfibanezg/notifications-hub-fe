import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
export interface ContactData {
  company: string;
  name: string;
  title: string;
  address: string;
  cityStateZip: string;
  email: string;
  phone: string;
  claimsaccess: string;
}
@Component({
  selector: 'contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements AfterViewInit {
  public contacts: ContactData[] = [
    {
      company: 'Company A',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes',
    },
    {
      company: 'Company B',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'No',
    },
    {
      company: 'Company C',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes'
    },
    {

      company: 'Company A',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes',
    },
    {
      company: 'Company B',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'No',
    },
    {
      company: 'Company C',
      name: '1234567891234',
      title: '1234567891234',
      email: 'person@contact.c',
      phone: '(888)-888-888',
      address: '123 Example St',
      cityStateZip: '1234567891234',
      claimsaccess: 'Yes',
    }
  ];

  public modalToShow: 'create' | 'invite' = 'create';

  displayedColumns: string[] = ['company', 'name', 'title', 'email', 'phone', 'address', 'cityStateZip', 'claimsaccess', "actions"];
  dataSource: MatTableDataSource<ContactData>;
  @ViewChild(MatSort) sort?: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(this.contacts);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }

}

