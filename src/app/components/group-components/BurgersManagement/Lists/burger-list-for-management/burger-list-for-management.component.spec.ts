import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerListForManagementComponent } from './burger-list-for-management.component';

describe('BurgerListForManagementComponent', () => {
  let component: BurgerListForManagementComponent;
  let fixture: ComponentFixture<BurgerListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerListForManagementComponent]
    });
    fixture = TestBed.createComponent(BurgerListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
