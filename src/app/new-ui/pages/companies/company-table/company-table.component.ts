import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface CompanyData {
  companyName: string;
  address: string;
  address2: string;
  phone: string;
  email: string;
  claimant: string;
  customerType: string;
  claims: string;
 }
@Component({
  selector: 'company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['companyName', 'address', 'phone', 'email', 'claimant', 'customerType', 'claims', 'actions'];
  dataSource: MatTableDataSource<CompanyData>;

  @ViewChild(MatSort) sort?: MatSort;

  constructor() {
    const companies = Array.from({ length: 25 }, (_, k) => createNewCompany(k + 1));
    this.dataSource = new MatTableDataSource(companies);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }


}
function createNewCompany(id: number): CompanyData {
  return {
    companyName:  `Example company`,
    address: `123 Example St`,
    address2: 'New York,NY 11...',
    phone: `(888)-888-8888`,
    email: `person@exam..`,
    claimant: 'Cargo claims..',
    customerType: genCustomerType(),
    claims: (1+Math.floor(Math.random() * 11)).toString()
  };

}


function genCustomerType() {
  const index = Math.floor(Math.random() * 2);
  const statusArr = ['Shipper', 'Consignee'];
  return statusArr[index];
}



