import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGroupComponent } from './toggle-group.component';

describe('ToggleGroupComponent', () => {
  let component: ToggleGroupComponent;
  let fixture: ComponentFixture<ToggleGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleGroupComponent]
    });
    fixture = TestBed.createComponent(ToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
