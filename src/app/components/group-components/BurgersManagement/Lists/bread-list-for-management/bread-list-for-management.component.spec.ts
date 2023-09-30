import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadListForManagementComponent } from './bread-list-for-management.component';

describe('BreadListForManagementComponent', () => {
  let component: BreadListForManagementComponent;
  let fixture: ComponentFixture<BreadListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadListForManagementComponent]
    });
    fixture = TestBed.createComponent(BreadListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
