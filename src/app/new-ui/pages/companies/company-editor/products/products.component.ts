import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductEditorComponent } from '../modal-product-editor/modal-product-editor.component';

@Component({
  selector: 'company-editor-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public columns = [
    { title: 'Product Name', fieldName: 'productname' },
    { title: 'Commodity Code', fieldName: 'commoditycode' },
    { title: 'Cost', fieldName: 'cost' },
    { title: 'Weight', fieldName: 'weight' },
  ];
  public contacts = [
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
  public modalToShow: 'create' | 'update' = 'create';
  constructor(public dialog: MatDialog) {}
  openAddProduct() {
    let comp = ModalProductEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
