import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileTileComponent } from './upload-file-tile.component';

describe('UploadFileTileComponent', () => {
  let component: UploadFileTileComponent;
  let fixture: ComponentFixture<UploadFileTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFileTileComponent]
    });
    fixture = TestBed.createComponent(UploadFileTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
