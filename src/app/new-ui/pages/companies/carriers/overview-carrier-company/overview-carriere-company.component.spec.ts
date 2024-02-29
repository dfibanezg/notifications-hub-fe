import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCarrierCompanyComponent } from './overview-carriere-company.component';

describe('OverviewCarriereCompanyComponent', () => {
  let component: OverviewCarrierCompanyComponent;
  let fixture: ComponentFixture<OverviewCarrierCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewCarrierCompanyComponent]
    });
    fixture = TestBed.createComponent(OverviewCarrierCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
