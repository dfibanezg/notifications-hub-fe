import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsNotFiledComponent } from './claims-not-filed.component';

describe('ClaimsNotFiledComponent', () => {
  let component: ClaimsNotFiledComponent;
  let fixture: ComponentFixture<ClaimsNotFiledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsNotFiledComponent]
    });
    fixture = TestBed.createComponent(ClaimsNotFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
