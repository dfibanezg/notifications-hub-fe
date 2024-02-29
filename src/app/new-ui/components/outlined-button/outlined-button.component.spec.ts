import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OulinedButtonComponent } from './outlined-button.component';

describe('LinkButtonComponent', () => {
  let component: OulinedButtonComponent;
  let fixture: ComponentFixture<OulinedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OulinedButtonComponent]
    });
    fixture = TestBed.createComponent(OulinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
