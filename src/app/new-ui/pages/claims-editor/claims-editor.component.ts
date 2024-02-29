import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims-editor',
  templateUrl: './claims-editor.component.html',
  styleUrls: ['./claims-editor.component.scss']
})
export class ClaimsEditorComponent {

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
    this.router.navigateByUrl('/new-ui/claims/claims-view');
  }
}
