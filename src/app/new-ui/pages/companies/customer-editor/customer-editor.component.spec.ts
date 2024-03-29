import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditorComponent } from './customer-editor.component';

describe('CustomerEditorComponent', () => {
  let component: CustomerEditorComponent;
  let fixture: ComponentFixture<CustomerEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerEditorComponent]
    });
    fixture = TestBed.createComponent(CustomerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
