import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOutlinedComponent } from './panel-outlined.component';

describe('PanelOutlinedComponent', () => {
  let component: PanelOutlinedComponent;
  let fixture: ComponentFixture<PanelOutlinedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelOutlinedComponent]
    });
    fixture = TestBed.createComponent(PanelOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
