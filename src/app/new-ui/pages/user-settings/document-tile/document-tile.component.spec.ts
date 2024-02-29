import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTileComponent } from './document-tile.component';

describe('DocumentTileComponent', () => {
  let component: DocumentTileComponent;
  let fixture: ComponentFixture<DocumentTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTileComponent]
    });
    fixture = TestBed.createComponent(DocumentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
