import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersListComponent } from './carriers-list.component';

describe('CarriersListComponent', () => {
  let component: CarriersListComponent;
  let fixture: ComponentFixture<CarriersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarriersListComponent]
    });
    fixture = TestBed.createComponent(CarriersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
