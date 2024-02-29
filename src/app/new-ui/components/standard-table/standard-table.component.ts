import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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
  selector: 'standard-table',
  templateUrl: './standard-table.component.html',
  styleUrls: ['./standard-table.component.scss']
})
export class StandardTableComponent implements OnInit, AfterViewInit {

  @Input() data : any[] = [];
  @Input()
  columns: any[] = [];
  displayedColumns: string[] = [];
  dataSource?: MatTableDataSource<UserData> ;

  @ViewChild(MatSort) sort?: MatSort;

  constructor() {

    // Assign the data to the data source for the table to render

   }

  ngOnInit(): void {

    this.displayedColumns = this.columns.map(c => c.fieldName);
    this.displayedColumns = [...this.displayedColumns, 'actions'];
    this.dataSource = new MatTableDataSource(this.data);
    
    
  }

  ngAfterViewInit() {
    this.dataSource!.sort = this.sort!;
  }


}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: `${Math.round(Math.random() * 1000000000 ) }`,
    customer: `Customer ${id}`,
    carrier: `Carrier ${id}`,
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
