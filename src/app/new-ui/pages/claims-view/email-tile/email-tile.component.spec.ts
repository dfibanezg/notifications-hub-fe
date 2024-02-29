import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTileComponent } from './email-tile.component';

describe('EmailTileComponent', () => {
  let component: EmailTileComponent;
  let fixture: ComponentFixture<EmailTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTileComponent]
    });
    fixture = TestBed.createComponent(EmailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
