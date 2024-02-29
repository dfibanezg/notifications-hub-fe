import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInsuranceCompanyComponent } from './overview-insurance-company.component';

describe('OverviewInsuranceCompanyComponent', () => {
  let component: OverviewInsuranceCompanyComponent;
  let fixture: ComponentFixture<OverviewInsuranceCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewInsuranceCompanyComponent]
    });
    fixture = TestBed.createComponent(OverviewInsuranceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
