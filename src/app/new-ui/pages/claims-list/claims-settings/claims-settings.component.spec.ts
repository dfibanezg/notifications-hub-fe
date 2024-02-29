import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsSettingsComponent } from './claims-settings.component';

describe('ClaimsSettingsComponent', () => {
  let component: ClaimsSettingsComponent;
  let fixture: ComponentFixture<ClaimsSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsSettingsComponent]
    });
    fixture = TestBed.createComponent(ClaimsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
