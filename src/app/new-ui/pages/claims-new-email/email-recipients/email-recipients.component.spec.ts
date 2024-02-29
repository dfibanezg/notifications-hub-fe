import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRecipientsComponent } from './email-recipients.component';

describe('EmailRecipientsComponent', () => {
  let component: EmailRecipientsComponent;
  let fixture: ComponentFixture<EmailRecipientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailRecipientsComponent]
    });
    fixture = TestBed.createComponent(EmailRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
