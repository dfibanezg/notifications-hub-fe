import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsFiltersComponent } from './claims-filters.component';

describe('ClaimsFiltersComponent', () => {
  let component: ClaimsFiltersComponent;
  let fixture: ComponentFixture<ClaimsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
