import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksManagementComponent } from './drinks-management.component';

describe('DrinksManagementComponent', () => {
  let component: DrinksManagementComponent;
  let fixture: ComponentFixture<DrinksManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksManagementComponent]
    });
    fixture = TestBed.createComponent(DrinksManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
