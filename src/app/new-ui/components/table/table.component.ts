import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id: string;
  customer: string;
  carrier: string;
  amount: string;
  created: string;
  lastUpdate: string;
  status: string;
  //actions: null;
}

@Component({
  selector: 'new-ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'customer', 'carrier', 'amount','created','lastUpdate','status','actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatSort) sort?: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }


}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: `${Math.round(Math.random() * 1000000000 ) }`,
    customer: `Cargo Claims Solutions ${id}`,
    carrier: `Cargo Claims Solutions ${id}`,
    amount: `${ Math.round( Math.random() * 1000000 ) / 100 }`,
    created: '2024-01-01',
    lastUpdate: '2024-01-01',
    status: genRandomStatus(),
    //actions: null,
  };

}

function genRandomStatus(){
  const index = Math.floor( Math.random() * 5);
  const statusArr = ['In Progress','Filed with Carrier','Waiting on Invoice','Filed with Insurance'];
  return statusArr[index];
}
