import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsNewEmailComponent } from './claims-new-email.component';

describe('ClaimsNewEmailComponent', () => {
  let component: ClaimsNewEmailComponent;
  let fixture: ComponentFixture<ClaimsNewEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsNewEmailComponent]
    });
    fixture = TestBed.createComponent(ClaimsNewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
