import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierEditorComponent } from './carrier-editor.component';

describe('CarrierEditorComponent', () => {
  let component: CarrierEditorComponent;
  let fixture: ComponentFixture<CarrierEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrierEditorComponent]
    });
    fixture = TestBed.createComponent(CarrierEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
