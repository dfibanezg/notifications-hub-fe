import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




export interface ProductData {

  productname: string;
  commoditycode: string;
  cost: string;
  weight: string;
}
@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements AfterViewInit {


  public products: ProductData[] = [
    {
      productname: '1234567891234',
      commoditycode: '1234567891234',
      cost: '1234567891234',
      weight: '1234567891234',
    },
    {
      productname: '1234567891234',
      commoditycode: '1234567891234',
      cost: '1234567891234',
      weight: '1234567891234',
    },
    {
      productname: '1234567891234',
      commoditycode: '1234567891234',
      cost: '1234567891234',
      weight: '1234567891234',
    },
  ];

  public modalToShow: 'create' | 'invite' = 'create';

  displayedColumns: string[] = ['productname', 'commoditycode', 'cost', 'weight', "actions"];
  dataSource: MatTableDataSource<ProductData>;
  @ViewChild(MatSort) sort?: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort!;
  }

}
