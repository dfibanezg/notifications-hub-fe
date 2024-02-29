import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocationEditorComponent } from './modal-location-editor.component';

describe('ModalLocationEditorComponent', () => {
  let component: ModalLocationEditorComponent;
  let fixture: ComponentFixture<ModalLocationEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLocationEditorComponent]
    });
    fixture = TestBed.createComponent(ModalLocationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
