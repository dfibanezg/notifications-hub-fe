import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactEditorComponent } from './modal-contact-editor.component';

describe('ModalContactEditorComponent', () => {
  let component: ModalContactEditorComponent;
  let fixture: ComponentFixture<ModalContactEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContactEditorComponent]
    });
    fixture = TestBed.createComponent(ModalContactEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
