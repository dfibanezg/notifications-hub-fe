import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTemplatesEditorComponent } from './letter-templates-editor.component';

describe('LetterTemplatesEditorComponent', () => {
  let component: LetterTemplatesEditorComponent;
  let fixture: ComponentFixture<LetterTemplatesEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterTemplatesEditorComponent]
    });
    fixture = TestBed.createComponent(LetterTemplatesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
