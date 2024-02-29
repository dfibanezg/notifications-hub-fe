import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { ModalProductEditorComponent } from '../company-editor/modal-product-editor/modal-product-editor.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public menuCompanies: Menus = Menus.Companies;
  public opcionCarrierButton = OpcionButtonMenu.company;
  public fb = inject(FormBuilder);
  public router = inject(Router);

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  create() {
    this.router.navigateByUrl('/new-ui/');
  }


  public modalToShow: 'create' | 'update' = 'create';
  constructor(public dialog: MatDialog) { }
  openAddProduct() {
    let comp = ModalProductEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
