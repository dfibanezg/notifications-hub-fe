import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersTableComponent } from './carriers-table.component';

describe('CarriersTableComponent', () => {
  let component: CarriersTableComponent;
  let fixture: ComponentFixture<CarriersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarriersTableComponent]
    });
    fixture = TestBed.createComponent(CarriersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
