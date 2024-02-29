import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menus } from 'src/app/constans/menus';
import { OpcionButtonMenu } from 'src/app/constans/opcion-button-menu';

@Component({
  selector: 'app-carriers-list',
  templateUrl: './carriers-list.component.html',
  styleUrls: ['./carriers-list.component.scss']
})
export class CarriersListComponent {

  public menuCompanies: Menus = Menus.Companies;
  public opcionCarrierButton = OpcionButtonMenu.carrier;
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
}

