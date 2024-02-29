import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsEditorComponent } from './claims-editor.component';

describe('ClaimsEditorComponent', () => {
  let component: ClaimsEditorComponent;
  let fixture: ComponentFixture<ClaimsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsEditorComponent]
    });
    fixture = TestBed.createComponent(ClaimsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
