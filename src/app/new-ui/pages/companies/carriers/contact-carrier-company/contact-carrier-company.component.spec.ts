import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCarrierCompanyComponent } from './contact-carrier-company.component';

describe('ContactCarrierCompanyComponent', () => {
  let component: ContactCarrierCompanyComponent;
  let fixture: ComponentFixture<ContactCarrierCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactCarrierCompanyComponent]
    });
    fixture = TestBed.createComponent(ContactCarrierCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
