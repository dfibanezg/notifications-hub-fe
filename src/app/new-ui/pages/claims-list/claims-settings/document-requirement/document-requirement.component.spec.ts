import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRequirementComponent } from './document-requirement.component';

describe('DocumentRequirementComponent', () => {
  let component: DocumentRequirementComponent;
  let fixture: ComponentFixture<DocumentRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentRequirementComponent]
    });
    fixture = TestBed.createComponent(DocumentRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
