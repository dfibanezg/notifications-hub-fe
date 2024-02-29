import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFilledComponent } from './panel-filled.component';

describe('PanelFilledComponent', () => {
  let component: PanelFilledComponent;
  let fixture: ComponentFixture<PanelFilledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelFilledComponent]
    });
    fixture = TestBed.createComponent(PanelFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
