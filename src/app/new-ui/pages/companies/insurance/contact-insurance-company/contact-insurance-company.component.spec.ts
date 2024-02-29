import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsInsuranceCompanyComponent } from './contact-insurance-company.component';

describe('ContactInsuranceCompanyComponent', () => {
  let component: ContactsInsuranceCompanyComponent;
  let fixture: ComponentFixture<ContactsInsuranceCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsInsuranceCompanyComponent]
    });
    fixture = TestBed.createComponent(ContactsInsuranceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
