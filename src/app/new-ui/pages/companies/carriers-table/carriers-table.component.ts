import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CarriersData {
  companyName: string;
  mode: string;
  address: string;
  phone: string;
  email: string;
  claimant: string;
  customerType: string;
  claims: string;
}
@Component({
  selector: 'carriers-table',
  templateUrl: './carriers-table.component.html',
  styleUrls: ['./carriers-table.component.scss']
})
export class CarriersTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['companyName','mode', 'address', 'phone', 'email','claims', 'actions'];
  dataSource: MatTableDataSource<CarriersData>;

  @ViewChild(MatSort) sort ?: MatSort;

  constructor() {
    const companies = Array.from({ length: 25 }, (_, k) => createNewCarriers(k + 1));
    this.dataSource = new MatTableDataSource(companies);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }


}
function createNewCarriers(id: number): CarriersData {
  return {
    companyName: `Example company`,
    address: `123 Example St.`,
    mode: genMode(),
    phone: `(888)-888-8888`,
    email: `person@example.com`,
    claimant: 'Cargo claims',
    customerType: genCustomerType(),
    claims: (1 + Math.floor(Math.random() * 11)).toString()
  };

}


function genCustomerType() {
  const index = Math.floor(Math.random() * 2);
  const statusArr = ['Shipper', 'Consignee'];
  return statusArr[index];
}

function genMode() {
  const index = Math.floor(Math.random() * 2);
  const statusArr = ['TL', 'LTL'];
  return statusArr[index];
}


