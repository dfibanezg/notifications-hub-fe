import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClaimSettingComponent } from './new-claim-setting.component';

describe('NewClaimSettingComponent', () => {
  let component: NewClaimSettingComponent;
  let fixture: ComponentFixture<NewClaimSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClaimSettingComponent]
    });
    fixture = TestBed.createComponent(NewClaimSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
