import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkListForManagementComponent } from './drink-list-for-management.component';

describe('DrinkListForManagementComponent', () => {
  let component: DrinkListForManagementComponent;
  let fixture: ComponentFixture<DrinkListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkListForManagementComponent]
    });
    fixture = TestBed.createComponent(DrinkListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
