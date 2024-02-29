import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplatesEditorComponent } from './email-templates-editor.component';

describe('EmailTemplatesEditorComponent', () => {
  let component: EmailTemplatesEditorComponent;
  let fixture: ComponentFixture<EmailTemplatesEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplatesEditorComponent]
    });
    fixture = TestBed.createComponent(EmailTemplatesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
