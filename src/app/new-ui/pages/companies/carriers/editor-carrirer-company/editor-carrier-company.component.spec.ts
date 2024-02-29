import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCarrierCompanyComponent } from './editor-insurance-company.component';

describe('EditorInsuranceCompanyComponent', () => {
  let component: EditorCarrierCompanyComponent;
  let fixture: ComponentFixture<EditorCarrierCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorCarrierCompanyComponent]
    });
    fixture = TestBed.createComponent(EditorCarrierCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
