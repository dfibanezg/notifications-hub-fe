import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsClaimsTotalComponent } from './cards-claims-total.component';

describe('CardsClaimsTotalComponent', () => {
  let component: CardsClaimsTotalComponent;
  let fixture: ComponentFixture<CardsClaimsTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsClaimsTotalComponent]
    });
    fixture = TestBed.createComponent(CardsClaimsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
