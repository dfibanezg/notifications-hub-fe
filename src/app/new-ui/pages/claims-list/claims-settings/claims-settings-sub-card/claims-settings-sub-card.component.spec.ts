import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsSettingsSubCardComponent } from './claims-settings-sub-card.component';

describe('ClaimsSettingsSubCardComponent', () => {
  let component: ClaimsSettingsSubCardComponent;
  let fixture: ComponentFixture<ClaimsSettingsSubCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsSettingsSubCardComponent]
    });
    fixture = TestBed.createComponent(ClaimsSettingsSubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
