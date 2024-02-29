import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInsuranceCompanyComponent } from './editor-insurance-company.component';

describe('EditorInsuranceCompanyComponent', () => {
  let component: EditorInsuranceCompanyComponent;
  let fixture: ComponentFixture<EditorInsuranceCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorInsuranceCompanyComponent]
    });
    fixture = TestBed.createComponent(EditorInsuranceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
