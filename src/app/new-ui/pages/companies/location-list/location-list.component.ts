import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';
import { ModalLocationEditorComponent } from '../company-editor/modal-location-editor/modal-location-editor.component';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {
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

  public modalToShow: 'create' | 'invite' = 'create';


  constructor(public dialog: MatDialog) { }
  openAddLocation() {
    let comp = ModalLocationEditorComponent;
    this.modalToShow = 'create';
    const dialogRef = this.dialog.open(comp, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
