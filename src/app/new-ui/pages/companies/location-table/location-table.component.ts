import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface LocationData {
  company: string;
  name: string;
  title: string;
  address: string;
  cityStateZip: string;
  email: string;
  phone: string;
  type: string;
}
@Component({
  selector: 'location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.scss']
})
export class LocationTableComponent {

  public locations: LocationData[] = [
    {
      company: 'Company A',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      company: 'Company B',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      company: 'Company C',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      company: 'Company A',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      company: 'Company B',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    },
    {
      company: 'Company C',
      name: '1234567891234',
      title: '1234567891234',
      email: '1234567891234',
      phone: '1234567891234',
      address: '1234567891234',
      cityStateZip: '1234567891234',
      type: '1234567891234',
    }
  ];


  public modalToShow: 'create' | 'invite' = 'create';

  //Name Address City / State / Zip Email Phone Type
  displayedColumns: string[] = ['company', 'name', 'address', 'cityStateZip', 'email', 'phone', 'type', "actions"];
  dataSource: MatTableDataSource<LocationData>;
  @ViewChild(MatSort) sort?: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(this.locations);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }


}
