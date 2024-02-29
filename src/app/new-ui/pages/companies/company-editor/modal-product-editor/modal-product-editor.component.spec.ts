import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductEditorComponent } from './modal-product-editor.component';

describe('ModalProductEditorComponent', () => {
  let component: ModalProductEditorComponent;
  let fixture: ComponentFixture<ModalProductEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProductEditorComponent]
    });
    fixture = TestBed.createComponent(ModalProductEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
