import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { ModalContactEditorComponent } from '../company-editor/modal-contact-editor/modal-contact-editor.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  public menuCompanies: Menus = Menus.Companies;
  public opcionCarrierButton = OpcionButtonMenu.company;
  public fb = inject(FormBuilder);
  public router = inject(Router);
  public modalToShow :string= "";


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

  constructor(public dialog: MatDialog) {
  }

  ///

  openAddContact() {
    //public dialog: MatDialog
    let comp = ModalContactEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, { data: { showGrantClaint: true } }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
