import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceEditorComponent } from './insurance-editor.component';

describe('InsuranceEditorComponent', () => {
  let component: InsuranceEditorComponent;
  let fixture: ComponentFixture<InsuranceEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceEditorComponent]
    });
    fixture = TestBed.createComponent(InsuranceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
