import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPanelComponent } from './party-panel.component';

describe('PartyPanelComponent', () => {
  let component: PartyPanelComponent;
  let fixture: ComponentFixture<PartyPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyPanelComponent]
    });
    fixture = TestBed.createComponent(PartyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
